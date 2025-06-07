// components/MovieRow.tsx
import Image from "next/image";
import Link from "next/link";

export default function MovieRow({ title, movies }: { title: string; movies: any[] }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 px-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || "Film"}
              width={160}
              height={240}
              className="rounded-md hover:scale-105 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
