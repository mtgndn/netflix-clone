// app/movie/[id]/page.tsx
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function getMovieDetails(id: string) {
  const [movieRes, videosRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=tr-TR`,
      { cache: "no-store" }
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=tr-TR`,
      { cache: "no-store" }
    ),
  ]);

  if (!movieRes.ok || !videosRes.ok) {
    throw new Error("Film detayları veya videolar alınamadı");
  }

  const movie = await movieRes.json();
  const videos = await videosRes.json();

  return { movie, videos };
}

export default async function MovieDetailPage({ params }: Props) {
  const { id } = params;
  const { movie, videos } = await getMovieDetails(id);

  const trailers = (videos.results || []).filter(
    (video: any) => video.type === "Trailer" && video.site === "YouTube"
  );
  const trailer = trailers.length > 0 ? trailers[0] : null;

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative w-full h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="relative z-20 max-w-6xl mx-auto h-full flex flex-col justify-end px-6 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{movie.title}</h1>
          <p className="text-md md:text-lg text-gray-300 max-w-2xl mb-3">{movie.overview}</p>
          <div className="text-sm md:text-base text-gray-400 space-x-6">
            <span>📅 {movie.release_date}</span>
            <span>⭐ {movie.vote_average.toFixed(1)} / 10</span>
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section className="w-full bg-black text-white pt-24 pb-32">
        <div className="max-w-6xl mx-auto px-6">
          {trailer ? (
            <>
              <h2 className="text-3xl font-semibold mb-8">Fragman</h2>
              <div className="w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          ) : (
            <p className="text-gray-400 text-center">Fragman bulunamadı.</p>
          )}
        </div>
      </section>
    </main>
  );
}
