// lib/tmdb.ts
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMoviesByCategory(category: string) {
  const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=tr-TR`);
  const data = await res.json();
  return data.results;
}
