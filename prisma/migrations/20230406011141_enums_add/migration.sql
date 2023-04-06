-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('Live', 'Deleted');

-- AlterTable
ALTER TABLE "App" ADD COLUMN     "status" "STATUS" NOT NULL DEFAULT 'Live';

-- AlterTable
ALTER TABLE "Console" ADD COLUMN     "status" "STATUS" NOT NULL DEFAULT 'Live';
