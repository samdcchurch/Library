-- docker compose exec -T db psql -U library -d postgres -f - < 01-database.sql

SET client_min_messages = WARNING;
SET TIME ZONE 'UTC';

CREATE DATABASE library;
