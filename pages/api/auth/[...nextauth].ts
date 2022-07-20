import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

import providers from "lib/api/auth/providers";
import { adapter } from "lib/api/auth/adapter";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, {
    providers,
    adapter,
    debug: true,
  });
};
export default auth;
