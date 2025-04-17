import { useEffect, useState } from "react";

export default function NavReact() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const match = document.cookie.match(/token=([^;]+)/);
    if (match) {
      setUser(match[1]); // o simplemente setUser(true)
    }
  }, []);

  const handleLogout = async () => {
    console.log("log");
    const response = await fetch("/api/logout");
    if (response.ok) window.location.reload();
  };

  return (
    <nav className="space-x-4">
      <a href="/" className="text-gray-700 hover:text-black">
        {" "}
        Inicio{" "}
      </a>

      {user ? (
        <>
          <a href="/admin" className="text-gray-700 hover:text-black">
            Panel
          </a>
          <button
            type="submit"
            className="text-gray-700 hover:text-black"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <a href="/admin" className="text-gray-700 hover:text-black">
          Admin
        </a>
      )}
    </nav>
  );
}
