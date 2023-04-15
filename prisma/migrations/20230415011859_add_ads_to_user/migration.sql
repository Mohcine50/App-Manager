-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
