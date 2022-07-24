import { Session } from "next-auth";
import { api } from ".";

export const authApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getSession: query<Session, void>({
      query: () => "session",
    }),
  }),
});

export const { useGetSessionQuery } = authApi;
