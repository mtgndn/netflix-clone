// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/browse(.*)", "/favorites(.*)", "/watch(.*)"], // korumalı route'lar
};
