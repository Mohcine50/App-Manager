-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_jsonAppId_fkey";

-- AlterTable
ALTER TABLE "App" ALTER COLUMN "jsonAppId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_jsonAppId_fkey" FOREIGN KEY ("jsonAppId") REFERENCES "JsonApp"("id") ON DELETE SET NULL ON UPDATE CASCADE;
