// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import authOptions from "@/api/auth";
import nc, { Options } from "next-connect";
import { Session } from "next-auth";
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
