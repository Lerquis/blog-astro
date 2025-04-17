import jwt from "jsonwebtoken";
import cookie from "cookie";

const SECRECT = import.meta.env.JWT_SECRET;
export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRECT);
  } catch (err) {
    return null;
  }
}

export function getUserFromRequest(req) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  if (!cookies.token) return null;
  return verifyToken(cookies.token);
}
