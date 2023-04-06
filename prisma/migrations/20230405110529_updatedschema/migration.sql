/*
  Warnings:

  - Added the required column `title` to the `exception_slots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `meetings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "meeting_type" AS ENUM ('mock', 'codereview', 'one', 'annual', 'biannual', 'quarterly');

-- AlterTable
ALTER TABLE "exception_slots" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "meetings" ADD COLUMN     "type" "meeting_type" NOT NULL;
