import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "@/api/middleware/session";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    res.send(JSON.stringify(session, null, 2));
  }
}
