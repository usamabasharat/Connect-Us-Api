-- AlterTable
CREATE SEQUENCE meetings_id_seq;
ALTER TABLE "meetings" ALTER COLUMN "id" SET DEFAULT nextval('meetings_id_seq');
ALTER SEQUENCE meetings_id_seq OWNED BY "meetings"."id";

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq');
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";
