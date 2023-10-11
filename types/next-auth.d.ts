import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string;
    role: number;
    token: string;
    tokenHead: string;
    loginUser: {
        imgUrl: string;
        username: string;
        id: number;
    }
  }

  interface User {
    id: string;
    role: number;
    token: string;
    tokenHead: string;
    loginUser: {
        imgUrl: string;
        username: string;
        id: number;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: number;
    token: string;
    tokenHead: string;
    loginUser: {
        imgUrl: string;
        username: string;
        id: number;
    }
  }
}
