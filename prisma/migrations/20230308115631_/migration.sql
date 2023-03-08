-- CreateTable
CREATE TABLE "attendees" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "meeting_id" INTEGER NOT NULL,
    "accepted" BOOLEAN,
    "notes" TEXT,
    "optional" BOOLEAN NOT NULL,

    CONSTRAINT "pk_111" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exception_slots" (
    "id" SERIAL NOT NULL,
    "from" TIMESTAMP(6) NOT NULL,
    "to" TIMESTAMP(6) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "pk_81" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "meeting_id" INTEGER NOT NULL,
    "evaluated_by" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "json_feedback" JSON NOT NULL,

    CONSTRAINT "pk_151" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generic_slots" (
    "id" SERIAL NOT NULL,
    "from" TIME(6) NOT NULL,
    "to" TIME(6) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "pk_71" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meetings" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "attachments" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "pk_135" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,

    CONSTRAINT "pk_61" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduled_slots" (
    "id" SERIAL NOT NULL,
    "from" TIMESTAMP(6) NOT NULL,
    "to" TIMESTAMP(6) NOT NULL,
    "meeting_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "pk_11" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "manager_id" INTEGER,

    CONSTRAINT "pk_1" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fk_22" ON "attendees"("user_id");

-- CreateIndex
CREATE INDEX "fk_33" ON "attendees"("meeting_id");

-- CreateIndex
CREATE INDEX "fk_82" ON "exception_slots"("user_id");

-- CreateIndex
CREATE INDEX "fk_23" ON "feedbacks"("user_id");

-- CreateIndex
CREATE INDEX "fk_333" ON "feedbacks"("evaluated_by");

-- CreateIndex
CREATE INDEX "fk_4" ON "feedbacks"("meeting_id");

-- CreateIndex
CREATE INDEX "fk_72" ON "generic_slots"("user_id");

-- CreateIndex
CREATE INDEX "fk_62" ON "questions"("created_by");

-- CreateIndex
CREATE INDEX "fk_5" ON "scheduled_slots"("meeting_id");

-- CreateIndex
CREATE INDEX "fk_6" ON "scheduled_slots"("user_id");

-- CreateIndex
CREATE INDEX "fk_2" ON "users"("manager_id");

-- AddForeignKey
ALTER TABLE "attendees" ADD CONSTRAINT "fk_100" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "attendees" ADD CONSTRAINT "fk_101" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exception_slots" ADD CONSTRAINT "fk_87" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "fk_131" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "fk_222" FOREIGN KEY ("evaluated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "fk_44" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "generic_slots" ADD CONSTRAINT "fk_76" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "fk_63" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "scheduled_slots" ADD CONSTRAINT "fk_8" FOREIGN KEY ("meeting_id") REFERENCES "meetings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "scheduled_slots" ADD CONSTRAINT "fk_9" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "fk_5" FOREIGN KEY ("manager_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
