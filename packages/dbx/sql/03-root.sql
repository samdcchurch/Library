-- docker compose exec -T db psql -U library -d library -f - < 03-root.sql

INSERT INTO folders (parent_id, name, deleted_at) VALUES (NULL, 'root', NULL);
