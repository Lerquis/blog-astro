export const prerender = false;
export async function GET({ cookies }) {
  cookies.delete("token", {
    path: "/",
  });
  return new Response("Logout", { status: 200 });
}
