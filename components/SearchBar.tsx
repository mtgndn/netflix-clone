"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Film ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-l px-4 py-2 w-64 text-black"
      />
      <button
        type="submit"
        className="bg-red-600 text-white px-4 rounded-r hover:bg-red-700"
      >
        Ara
      </button>
    </form>
  );
}
