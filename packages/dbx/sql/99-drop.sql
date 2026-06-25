-- docker compose exec -T db psql -U library -d postgres -f - < 99-drop.sql

SET client_min_messages = WARNING;
SET TIME ZONE 'UTC';

DROP DATABASE IF EXISTS library;