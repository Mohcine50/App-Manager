/*
  Warnings:

  - Made the column `userId` on table `Ads` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_userId_fkey";

-- AlterTable
ALTER TABLE "Ads" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
