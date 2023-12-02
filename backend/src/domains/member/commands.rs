use serde::Deserialize;
use uuid::Uuid;

#[derive(Deserialize, Clone)]
pub struct SignUpMember {
    pub email: String,
    pub password: String,
}

#[derive(Deserialize, Clone)]
pub struct UpdateMember {
    pub uuid: Uuid,
    pub password: String,
}

#[derive(Deserialize, Clone)]
pub struct SignInMember {
    pub email: String,
    pub password: String,
}
