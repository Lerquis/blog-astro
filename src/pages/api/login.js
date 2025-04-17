export const prerender = false;
export async function POST({ request, cookies }) {
  const body = await request.json();

  const response = await fetch(
    `${import.meta.env.PUBLIC_DATABASE_URL}user/login/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (data.status === 200) {
    cookies.set("token", data.token, {
      path: "/",
      maxAge: 3600, // 1 día
    });
    return new Response("Login exitoso", {
      status: 200,
    });
  } else {
    return new Response("Fail", { status: 400 });
  }
}
