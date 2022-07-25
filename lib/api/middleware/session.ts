import type { NextApiRequest, NextApiResponse } from "next";
import {
  unstable_getServerSession,
  type Session as SessionNA,
} from "next-auth";
import authOptions from "@/api/auth";
import { User } from "@/models/index";

type Session = {
  user: User | null;
} & SessionNA;

export const getSession = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Session | null> => {
  const session = (await unstable_getServerSession(
    req,
    res,
    authOptions
  )) as Session;
  return session;
};
