import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        return {
          id: "1",
          name: "کاربر تست",
          email: "test@example.com",
          role: "ADMIN",
        };
      },
    }),
  ],
} satisfies NextAuthConfig;