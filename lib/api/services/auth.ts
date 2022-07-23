import fetcher from "@/utils/fetcher";
import { Session } from "next-auth";

export const getSessionAuthService = async () => {
  try {
    const response: Session = await fetcher("/api/auth/session");
    return response;
  } catch (error) {
    return null;
  }
};
