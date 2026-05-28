import { nextAuthConfig } from "_/nextAuth.config/nextAuth.config";
import NextAuth from "next-auth";

const routerHandler=NextAuth(nextAuthConfig);
export{routerHandler as GET , routerHandler as POST}