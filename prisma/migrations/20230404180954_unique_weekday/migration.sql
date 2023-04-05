/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `generic_slots` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "generic_slots_type_key" ON "generic_slots"("type");
