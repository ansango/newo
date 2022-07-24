import { getSession } from "@/api/middleware/session";
import { router, options } from "@/api/middleware/router";

router.get(async (req, res) => {
  if (req.method === "GET") {
    const session = await getSession(req, res);
    if (!session) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      res.status(200).json(session);
    }
  }
});

export default router.handler(options);
