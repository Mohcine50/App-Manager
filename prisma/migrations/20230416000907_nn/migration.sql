-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_admobId_fkey";

-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_applovinId_fkey";

-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_fanId_fkey";

-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_unityId_fkey";

-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_adsId_fkey";

-- DropForeignKey
ALTER TABLE "Console" DROP CONSTRAINT "Console_phoneNumberId_fkey";

-- AddForeignKey
ALTER TABLE "Console" ADD CONSTRAINT "Console_phoneNumberId_fkey" FOREIGN KEY ("phoneNumberId") REFERENCES "phoneNumber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
