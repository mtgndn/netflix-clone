const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies() {
  const [popular, topRated, nowPlaying, upcoming] = await Promise.all([
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=tr-TR`).then((res) => res.json()),
    fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=tr-TR`).then((res) => res.json()),
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=tr-TR`).then((res) => res.json()),
    fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=tr-TR`).then((res) => res.json()),
  ]);

  return {
    popular: popular.results,
    topRated: topRated.results,
    nowPlaying: nowPlaying.results,
    upcoming: upcoming.results,
  };
}
