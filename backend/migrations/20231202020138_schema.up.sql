-- Add up migration script here
CREATE TYPE public.member_status AS ENUM ('active', 'deleted', 'abnormal' );

-- Add up migration script here
CREATE TABLE IF NOT EXISTS public.member (
    id              bigserial primary key,
    uuid            uuid                                     not null,
    name            text                                     not null,
    email           text                                     not null,
    status          member_status DEFAULT 'active'          not null,
    hashed_password text                                     not null,
    created_at      timestamp      default CURRENT_TIMESTAMP not null,
    updated_at      timestamp      default CURRENT_TIMESTAMP not null
);

comment on column public.member.uuid is 'public id to uniquely identify a member';

comment on column public.member.name is 'member name';

comment on column public.member.status is 'N: normal, D: deleted, A: abnormal';

create unique index uidx_member_uuid
    on public.member(uuid);

create unique index uidx_member_email
    on public.member(email);

CREATE TABLE IF NOT EXISTS public.toastmaster (
    id         bigserial primary key,
    name       text                                not null,
    district   text                                null,
    created_at timestamp default CURRENT_TIMESTAMP not null
);

CREATE TYPE public.toastmaster_role AS ENUM ('admin', 'member');

CREATE TABLE IF NOT EXISTS public.member_toastmaster (
    member_id     bigserial                                  not null,
    toastmaster_id bigserial                                  not null,
    role           toastmaster_role default 'member'          not null,
    created_at     timestamp        default CURRENT_TIMESTAMP not null,
    updated_at     timestamp        default CURRENT_TIMESTAMP not null,
    primary key (member_id, toastmaster_id)
);

CREATE TABLE IF NOT EXISTS public.toastmaster_meeting (
    id             bigserial primary key,
    toastmaster_id bigserial                           not null,
    date           date                                not null,
    location       text                                null,
    created_at     timestamp default CURRENT_TIMESTAMP not null,
    updated_at     timestamp default CURRENT_TIMESTAMP not null
);

CREATE TABLE IF NOT EXISTS public.toastmaster_meeting_speech (
    id                     bigserial primary key,
    toastmaster_meeting_id bigserial                           not null,
    speaker_id             bigserial                           not null,
    evaluator_id           bigserial                           not null,
    content                text                                null,
    feedback               text                                null,
    is_winner              boolean                             default false not null,
    created_at             timestamp default CURRENT_TIMESTAMP not null,
    updated_at             timestamp default CURRENT_TIMESTAMP not null
);
