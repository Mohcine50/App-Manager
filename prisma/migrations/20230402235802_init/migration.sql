-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Console" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Console_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "App" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "packageName" TEXT NOT NULL,
    "consoleId" INTEGER NOT NULL,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Console_name_key" ON "Console"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Console_email_key" ON "Console"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Console_phoneNumber_key" ON "Console"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "App_packageName_key" ON "App"("packageName");

-- AddForeignKey
ALTER TABLE "Console" ADD CONSTRAINT "Console_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_consoleId_fkey" FOREIGN KEY ("consoleId") REFERENCES "Console"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
