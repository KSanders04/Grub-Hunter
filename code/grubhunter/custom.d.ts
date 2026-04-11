import { DefaultSession } from "next-auth";

declare global {
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

declare module "next-auth" {
  interface Session {
    user: {
      fdlst_private_userId?: string;
    } & DefaultSession["user"];
  }
}

export {};
