import { router, options } from "@/api/middleware/router";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

router.get(async (req, res) => {
  const exercises = await prisma.exercise.findMany();
  res.status(200).json(exercises);
});

export default router.handler(options);
