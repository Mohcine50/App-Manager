/*
  Warnings:

  - A unique constraint covering the columns `[jsonAppId]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[APIKey]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jsonAppId` to the `App` table without a default value. This is not possible if the table is not empty.
  - Added the required column `APIKey` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "App" ADD COLUMN     "jsonAppId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "APIKey" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "JsonApp" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "JsonApp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JsonApp_id_key" ON "JsonApp"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JsonApp_url_key" ON "JsonApp"("url");

-- CreateIndex
CREATE UNIQUE INDEX "App_jsonAppId_key" ON "App"("jsonAppId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_APIKey_key" ON "User"("APIKey");

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_jsonAppId_fkey" FOREIGN KEY ("jsonAppId") REFERENCES "JsonApp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
