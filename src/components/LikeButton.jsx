import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      className="mt-2 text-sm text-blue-600 underline cursor-pointer hover:text-blue-800"
      onClick={() => setLikes(likes + 1)}
    >
      ❤️ Me gusta ({likes})
    </button>
  );
}
