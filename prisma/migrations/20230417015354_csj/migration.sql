/*
  Warnings:

  - You are about to drop the column `appId` on the `Admob` table. All the data in the column will be lost.
  - You are about to drop the column `appId` on the `Unity` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Admob_appId_key";

-- DropIndex
DROP INDEX "Unity_appId_key";

-- AlterTable
ALTER TABLE "Admob" DROP COLUMN "appId";

-- AlterTable
ALTER TABLE "Unity" DROP COLUMN "appId";
