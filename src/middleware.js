import { getUserFromRequest } from "./lib/auth.js";

export async function onRequest(context, next) {
  const { pathname } = context.url;
  if (
    pathname.startsWith("/admin") &&
    !pathname.includes("login") &&
    !pathname.includes("register")
  ) {
    const user = getUserFromRequest(context.request);
    console.log(user);
    if (!user) {
      return Response.redirect(new URL("/admin/login", context.url));
    }
  }
  return next();
}
