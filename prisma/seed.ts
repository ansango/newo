import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const pressBank = await prisma.exercise.upsert({
    where: { name: "Press Bank" },
    update: {},
    create: {
      name: "Press Bank",
      description: "",
      userId: "62dc13e3a5a78cb9fc4ca059",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
