import { getSession } from "@/api/middleware/session";
import { router, options } from "@/api/middleware/router";

router.delete(async (req, res) => {
  const session = await getSession(req, res);
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
     res.status(200).json({ message: "OK" });
  }
});

export default router.handler(options);
