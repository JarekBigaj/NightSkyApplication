/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Constellation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Star` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Constellation" ADD COLUMN "description" TEXT;
ALTER TABLE "Constellation" ADD COLUMN "urlImage" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Constellation_name_key" ON "Constellation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Star_name_key" ON "Star"("name");
