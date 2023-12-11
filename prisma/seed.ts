import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const salt = await genSalt(10);
  const password = await hash("shegami24", salt);
  const shegami = await prisma.user.upsert({
    where: { username: "shegami24" },
    update: {},
    create: {
      username: "shegami24",
      email: "shegami24@gmail.com",
      APIKey: "jncdjnc838nejnjnc38448duduejded38djie3iej",
      password,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
