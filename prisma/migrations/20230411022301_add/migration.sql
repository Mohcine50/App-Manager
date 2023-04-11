/*
  Warnings:

  - The primary key for the `App` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Console` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `phoneNumber` on the `Console` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[consoleId]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Console` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumberId]` on the table `Console` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `App` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumberId` to the `Console` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OPERATOR" AS ENUM ('ORANGE', 'IAM', 'INWI', 'UNKOWN');

-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_consoleId_fkey";

-- DropIndex
DROP INDEX "Console_phoneNumber_key";

-- AlterTable
ALTER TABLE "App" DROP CONSTRAINT "App_pkey",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "consoleId" SET DATA TYPE TEXT,
ADD CONSTRAINT "App_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "App_id_seq";

-- AlterTable
ALTER TABLE "Console" DROP CONSTRAINT "Console_pkey",
DROP COLUMN "phoneNumber",
ADD COLUMN     "phoneNumberId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Console_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Console_id_seq";

-- CreateTable
CREATE TABLE "phoneNumber" (
    "id" TEXT NOT NULL,
    "operator" "OPERATOR" NOT NULL,
    "number" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "phoneNumber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "phoneNumber_id_key" ON "phoneNumber"("id");

-- CreateIndex
CREATE UNIQUE INDEX "phoneNumber_number_key" ON "phoneNumber"("number");

-- CreateIndex
CREATE UNIQUE INDEX "App_id_key" ON "App"("id");

-- CreateIndex
CREATE UNIQUE INDEX "App_consoleId_key" ON "App"("consoleId");

-- CreateIndex
CREATE UNIQUE INDEX "Console_id_key" ON "Console"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Console_phoneNumberId_key" ON "Console"("phoneNumberId");

-- AddForeignKey
ALTER TABLE "Console" ADD CONSTRAINT "Console_phoneNumberId_fkey" FOREIGN KEY ("phoneNumberId") REFERENCES "phoneNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phoneNumber" ADD CONSTRAINT "phoneNumber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_consoleId_fkey" FOREIGN KEY ("consoleId") REFERENCES "Console"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
