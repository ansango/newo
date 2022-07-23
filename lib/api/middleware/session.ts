import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession, type Session } from "next-auth";
import authOptions from "@/api/auth";

export const getSession = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Session | null> => {
  const session = await unstable_getServerSession(req, res, authOptions);
  return session;
};
