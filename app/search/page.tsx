// app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import MovieRow from "@/components/MovieRow";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  // Eğer query boşsa arama yapma
  if (!query) {
    return (
      <main className="bg-black text-white min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-4">Film Ara</h1>
        <p>Arama terimi giriniz...</p>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Arama Sonuçları: "{query}"</h1>
      <MovieRow
        title={`Arama: ${query}`}
        url={`/search/movie?query=${encodeURIComponent(query)}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=tr-TR`}
      />
    </main>
  );
}
