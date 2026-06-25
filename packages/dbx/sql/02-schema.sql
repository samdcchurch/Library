-- docker compose exec -T db psql -U library -d library -f - < 02-schema.sql

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE folders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID REFERENCES folders(id),
    name TEXT NOT NULL,
    deleted_at TIMESTAMPTZ
);

CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id UUID REFERENCES folders(id) NOT NULL,
    name TEXT NOT NULL,
    size BIGINT NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL,
    deleted_at TIMESTAMPTZ
);

CREATE TABLE folder_files (
    folder UUID REFERENCES folders(id) NOT NULL,
    file UUID REFERENCES files(id) NOT NULL,
    PRIMARY KEY (folder, file)
);

CREATE TABLE folder_folders (
    parent_folder UUID REFERENCES folders(id) NOT NULL,
    child_folder UUID REFERENCES folders(id) NOT NULL,
    PRIMARY KEY (parent_folder, child_folder)
);
