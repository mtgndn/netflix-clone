// components/HeroBanner.tsx
import Image from "next/image";

export default function HeroBanner({ movie }: { movie: any }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-[70vh]">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title || "Film"}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      <div className="absolute bottom-8 left-8">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-lg max-w-xl">{movie.overview}</p>
      </div>
    </div>
  );
}
