-- CreateEnum
CREATE TYPE "user_designation" AS ENUM ('ase', 'se', 'sse', 'atl', 'tl', 'apm', 'pm');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('admin', 'superadmin', 'manager', 'user');

-- CreateEnum
CREATE TYPE "feedback_type" AS ENUM ('mock', 'codereview', 'one', 'annual', 'biannual', 'quarterly');

-- CreateEnum
CREATE TYPE "attendee_type" AS ENUM ('host', 'participant');

-- CreateEnum
CREATE TYPE "question_type" AS ENUM ('mock', 'codereview', 'one', 'annual', 'biannual', 'quarterly');

-- CreateEnum
CREATE TYPE "question_answer_type" AS ENUM ('numeric', 'string', 'boolean', 'options');

-- CreateEnum
CREATE TYPE "meeting_participant_type" AS ENUM ('host', 'participant');

-- CreateEnum
CREATE TYPE "week_day" AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday');

-- CreateEnum
CREATE TYPE "meeting_type" AS ENUM ('mock', 'codereview', 'one', 'annual', 'biannual', 'quarterly');

-- CreateTable
CREATE TABLE "attendees" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "meeting_id" INTEGER NOT NULL,
    "type" "meeting_participant_type" NOT NULL,
    "accepted" BOOLEAN,
    "notes" TEXT,
    "optional" BOOLEAN NOT NULL,

    CONSTRAINT "attendees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exception_slots" (
    "id" SERIAL NOT NULL,
    "from" TIMESTAMP(6) NOT NULL,
    "to" TIMESTAMP(6) NOT NULL,
    "title" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "exception_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" SERIAL NOT NULL,
    "type" "feedback_type" NOT NULL,
    "user_id" INTEGER NOT NULL,
    "meeting_id" INTEGER NOT NULL,
    "evaluated_by" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "json_feedback" JSON NOT NULL,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generic_slots" (
    "id" SERIAL NOT NULL,
    "from" TIME(6) NOT NULL,
    "to" TIME(6) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "week_day" NOT NULL,

    CONSTRAINT "generic_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meetings" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "attachments" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "meeting_type" NOT NULL,

    CONSTRAINT "meetings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "type" "question_type" NOT NULL,
    "answer_type" "question_answer_type" NOT NULL,
    "question_answer" JSONB NOT NULL,
    "created_by" INTEGER NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduled_slots" (
    "id" SERIAL NOT NULL,
    "from" TIMESTAMP(6) NOT NULL,
    "to" TIMESTAMP(6) NOT NULL,
    "meeting_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" "meeting_participant_type" NOT NULL,

    CONSTRAINT "scheduled_slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "manager_id" INTEGER,
    "role" "user_role" NOT NULL,
    "designation" "user_designation" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "attendees_user_id_idx" ON "attendees"("user_id");

-- CreateIndex
CREATE INDEX "attendees_meeting_id_idx" ON "attendees"("meeting_id");

-- CreateIndex
CREATE INDEX "exception_slots_user_id_idx" ON "exception_slots"("user_id");

-- CreateIndex
CREATE INDEX "feedbacks_user_id_idx" ON "feedbacks"("user_id");

-- CreateIndex
CREATE INDEX "feedbacks_evaluated_by_idx" ON "feedbacks"("evaluated_by");

-- CreateIndex
CREATE INDEX "feedbacks_meeting_id_idx" ON "feedbacks"("meeting_id");

-- CreateIndex
CREATE INDEX "generic_slots_user_id_idx" ON "generic_slots"("user_id");

-- CreateIndex
CREATE INDEX "questions_created_by_idx" ON "questions"("created_by");

-- CreateIndex
CREATE INDEX "scheduled_slots_meeting_id_idx" ON "scheduled_slots"("meeting_id");

-- CreateIndex
CREATE INDEX "scheduled_slots_user_id_idx" ON "scheduled_slots"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_manager_id_idx" ON "users"("manager_id");

-- AddForeignKey
ALTER TABLE "attendees" ADD CONSTRAINT "attendees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "attendees" ADD CONSTRAINT "attendees_meeting_id_fkey" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exception_slots" ADD CONSTRAINT "fk_87" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_evaluated_by_fkey" FOREIGN KEY ("evaluated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_meeting_id_fkey" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "generic_slots" ADD CONSTRAINT "generic_slots_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "scheduled_slots" ADD CONSTRAINT "scheduled_slots_meeting_id_fkey" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "scheduled_slots" ADD CONSTRAINT "scheduled_slots_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
