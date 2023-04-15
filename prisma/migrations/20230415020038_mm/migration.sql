/*
  Warnings:

  - A unique constraint covering the columns `[appId]` on the table `Admob` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appId]` on the table `Unity` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Admob" ALTER COLUMN "appId" DROP NOT NULL,
ALTER COLUMN "rewardId" DROP NOT NULL,
ALTER COLUMN "interId" DROP NOT NULL,
ALTER COLUMN "bannerId" DROP NOT NULL,
ALTER COLUMN "nativeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Applovin" ALTER COLUMN "rewardId" DROP NOT NULL,
ALTER COLUMN "interId" DROP NOT NULL,
ALTER COLUMN "bannerId" DROP NOT NULL,
ALTER COLUMN "nativeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Fan" ALTER COLUMN "rewardId" DROP NOT NULL,
ALTER COLUMN "interId" DROP NOT NULL,
ALTER COLUMN "bannerId" DROP NOT NULL,
ALTER COLUMN "nativeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Unity" ALTER COLUMN "appId" DROP NOT NULL,
ALTER COLUMN "rewardId" DROP NOT NULL,
ALTER COLUMN "interId" DROP NOT NULL,
ALTER COLUMN "bannerId" DROP NOT NULL,
ALTER COLUMN "nativeId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admob_appId_key" ON "Admob"("appId");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_appId_key" ON "Unity"("appId");
