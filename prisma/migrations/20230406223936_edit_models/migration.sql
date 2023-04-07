/*
  Warnings:

  - Added the required column `createdAt` to the `Console` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "App" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Console" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
