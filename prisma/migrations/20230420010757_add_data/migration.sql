/*
  Warnings:

  - A unique constraint covering the columns `[dataId]` on the table `App` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "App" ADD COLUMN     "dataId" TEXT;

-- CreateTable
CREATE TABLE "Data" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubData" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "image" TEXT,
    "description" TEXT NOT NULL,
    "dataId" TEXT,

    CONSTRAINT "SubData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Data_id_key" ON "Data"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SubData_id_key" ON "SubData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "App_dataId_key" ON "App"("dataId");

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubData" ADD CONSTRAINT "SubData_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data"("id") ON DELETE SET NULL ON UPDATE CASCADE;
