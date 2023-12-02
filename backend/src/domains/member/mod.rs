use std::sync::OnceLock;

use bcrypt::DEFAULT_COST;
use chrono::NaiveDateTime;
use jwt_simple::prelude::{Claims, Duration, HS256Key, MACLike};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use uuid::Uuid;

use crate::domains::member::commands::UpdateMember;

use self::commands::SignUpMember;

pub mod commands;

#[derive(sqlx::Type, Debug, Serialize, Deserialize, PartialEq, Copy, Clone)]
#[sqlx(type_name = "member_status", rename_all = "lowercase")]
pub enum MemberStatus {
    Active,
    Deleted,
    Abnormal,
}

#[derive(Debug, FromRow, Serialize, Deserialize)]
pub struct Member {
    pub(crate) id: i64,
    pub(crate) uuid: Uuid,
    pub(crate) name: String,
    pub(crate) status: MemberStatus,
    pub(crate) hashed_password: String,
    pub(crate) created_at: NaiveDateTime,
    pub(crate) updated_at: NaiveDateTime,
}

impl Member {
    pub(crate) fn new(cmd: &SignUpMember) -> Self {
        Self {
            id: 0,
            uuid: Uuid::new_v4(),
            name: cmd.email.to_string(),
            status: MemberStatus::Active,
            hashed_password: Self::hash_password(&cmd.password),
            created_at: chrono::Utc::now().naive_utc(),
            updated_at: chrono::Utc::now().naive_utc(),
        }
    }

    pub(crate) fn merge(member: &Member, cmd: &UpdateMember) -> Member {
        Member {
            id: member.id,
            uuid: member.uuid,
            name: member.name.to_string(),
            status: member.status.clone(),
            hashed_password: Self::hash_password(&cmd.password),
            created_at: member.created_at,
            updated_at: chrono::Utc::now().naive_utc(),
        }
    }

    pub(crate) fn verify_password(&self, plaintext_password: &str) -> bool {
        match bcrypt::verify(plaintext_password, &self.hashed_password) {
            Ok(true) => true,
            _ => false
        }
    }

    pub(crate) fn hash_password(plaintext_password: &str) -> String {
        let hashed_password = bcrypt::hash_with_result(plaintext_password, DEFAULT_COST).unwrap();
        return hashed_password.to_string();
    }
    pub(crate) fn create_access_token(&self) -> String {
        let claims = Claims::create(Duration::from_hours(2));
        let token = jwt_token_secret_key().authenticate(claims).unwrap();
        return token;
    }
}

pub fn jwt_token_secret_key() -> &'static HS256Key {
    static JWT_TOKEN_SECRET_KEY: OnceLock<HS256Key> = OnceLock::new();
    JWT_TOKEN_SECRET_KEY.get_or_init(|| {
        let jwt_token_secret = std::env::var("JWT_TOKEN_SECRET").unwrap();
        let decoded_token_secret = base64::decode(jwt_token_secret).unwrap();
        HS256Key::from_bytes(decoded_token_secret.as_slice())
    })
}