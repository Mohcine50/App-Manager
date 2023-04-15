/*
  Warnings:

  - A unique constraint covering the columns `[adsId]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adsId` to the `App` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "App" ADD COLUMN     "adsId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Ads" (
    "id" TEXT NOT NULL,
    "hasUnity" BOOLEAN NOT NULL DEFAULT false,
    "hasAdmob" BOOLEAN NOT NULL DEFAULT false,
    "hasFan" BOOLEAN NOT NULL DEFAULT false,
    "hasApplovin" BOOLEAN NOT NULL DEFAULT false,
    "applovinId" TEXT NOT NULL,
    "fanId" TEXT NOT NULL,
    "unityId" TEXT NOT NULL,
    "admobId" TEXT NOT NULL,

    CONSTRAINT "Ads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Applovin" (
    "id" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "interId" TEXT NOT NULL,
    "bannerId" TEXT NOT NULL,
    "nativeId" TEXT NOT NULL,

    CONSTRAINT "Applovin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admob" (
    "id" TEXT NOT NULL,
    "appId" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "interId" TEXT NOT NULL,
    "bannerId" TEXT NOT NULL,
    "nativeId" TEXT NOT NULL,

    CONSTRAINT "Admob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fan" (
    "id" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "interId" TEXT NOT NULL,
    "bannerId" TEXT NOT NULL,
    "nativeId" TEXT NOT NULL,

    CONSTRAINT "Fan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unity" (
    "id" TEXT NOT NULL,
    "appId" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "interId" TEXT NOT NULL,
    "bannerId" TEXT NOT NULL,
    "nativeId" TEXT NOT NULL,

    CONSTRAINT "Unity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ads_id_key" ON "Ads"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ads_applovinId_key" ON "Ads"("applovinId");

-- CreateIndex
CREATE UNIQUE INDEX "Ads_fanId_key" ON "Ads"("fanId");

-- CreateIndex
CREATE UNIQUE INDEX "Ads_unityId_key" ON "Ads"("unityId");

-- CreateIndex
CREATE UNIQUE INDEX "Ads_admobId_key" ON "Ads"("admobId");

-- CreateIndex
CREATE UNIQUE INDEX "Applovin_id_key" ON "Applovin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Applovin_rewardId_key" ON "Applovin"("rewardId");

-- CreateIndex
CREATE UNIQUE INDEX "Applovin_interId_key" ON "Applovin"("interId");

-- CreateIndex
CREATE UNIQUE INDEX "Applovin_bannerId_key" ON "Applovin"("bannerId");

-- CreateIndex
CREATE UNIQUE INDEX "Applovin_nativeId_key" ON "Applovin"("nativeId");

-- CreateIndex
CREATE UNIQUE INDEX "Admob_id_key" ON "Admob"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admob_rewardId_key" ON "Admob"("rewardId");

-- CreateIndex
CREATE UNIQUE INDEX "Admob_interId_key" ON "Admob"("interId");

-- CreateIndex
CREATE UNIQUE INDEX "Admob_bannerId_key" ON "Admob"("bannerId");

-- CreateIndex
CREATE UNIQUE INDEX "Admob_nativeId_key" ON "Admob"("nativeId");

-- CreateIndex
CREATE UNIQUE INDEX "Fan_id_key" ON "Fan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fan_rewardId_key" ON "Fan"("rewardId");

-- CreateIndex
CREATE UNIQUE INDEX "Fan_interId_key" ON "Fan"("interId");

-- CreateIndex
CREATE UNIQUE INDEX "Fan_bannerId_key" ON "Fan"("bannerId");

-- CreateIndex
CREATE UNIQUE INDEX "Fan_nativeId_key" ON "Fan"("nativeId");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_id_key" ON "Unity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_rewardId_key" ON "Unity"("rewardId");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_interId_key" ON "Unity"("interId");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_bannerId_key" ON "Unity"("bannerId");

-- CreateIndex
CREATE UNIQUE INDEX "Unity_nativeId_key" ON "Unity"("nativeId");

-- CreateIndex
CREATE UNIQUE INDEX "App_adsId_key" ON "App"("adsId");

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_adsId_fkey" FOREIGN KEY ("adsId") REFERENCES "Ads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_applovinId_fkey" FOREIGN KEY ("applovinId") REFERENCES "Applovin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_fanId_fkey" FOREIGN KEY ("fanId") REFERENCES "Fan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_unityId_fkey" FOREIGN KEY ("unityId") REFERENCES "Unity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_admobId_fkey" FOREIGN KEY ("admobId") REFERENCES "Admob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
