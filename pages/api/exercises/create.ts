import { getSession } from "@/api/middleware/session";
import { router, options } from "@/api/middleware/router";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Prisma.validator<Prisma.ExerciseCreateInput>()({
//   name,
//   description,
//   muscles,
//   userId,
// })

router.post(async (req, res) => {
  const session = await getSession(req, res);
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    const userId = session.user?.id;
    const exercise = { ...req.body, userId };
    try {
      await prisma.exercise.create({
        data: {
          ...exercise,
        },
      });
      res.status(200).json({ exercise });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
});

export default router.handler(options);
