import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";

const API_KEY = process.env.TMDB_API_KEY;

async function fetchCategory(category: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=tr-TR`);
  const data = await res.json();
  return data.results;
}

export default async function BrowsePage() {
  const [popular, topRated, nowPlaying, upcoming] = await Promise.all([
    fetchCategory("popular"),
    fetchCategory("top_rated"),
    fetchCategory("now_playing"),
    fetchCategory("upcoming"),
  ]);

  return (
    <main className="bg-black text-white min-h-screen">
      <HeroBanner movie={popular[0]} />

      <section>
        <MovieRow title="Popüler" movies={popular} />
        <MovieRow title="En Çok Oy Alanlar" movies={topRated} />
        <MovieRow title="Şu Anda Vizyonda" movies={nowPlaying} />
        <MovieRow title="Yakında" movies={upcoming} />
      </section>
    </main>
  );
}
