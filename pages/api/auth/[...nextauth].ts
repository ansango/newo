import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { options } from "lib/api/auth";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, { ...options });
};
export default auth;
