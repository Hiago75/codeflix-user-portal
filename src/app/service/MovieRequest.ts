import { Movie, Movies } from "../types/Movie";
import { apiRequest, RequestOptions } from "./ApiRequest";

export const getMovieById = async (id: string): Promise<Movie> => {
  return apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: string): Promise<Movie> => {
  return apiRequest(`featured/${id}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options?: RequestOptions
): Promise<Movie[]> => {
  return apiRequest(
    'movies',
    { genres_like: encodeURIComponent(genre) },
    options
  );
};

export async function searchMovies(
  title: string = '',
  genre: string = '',
  options?: RequestOptions
): Promise<Movies> {
  const query: Record<string, string> = {
    title_like: title,
  };

  if (genre) {
    query.genres_like = genre;
  }

  return apiRequest<Movies>('movies', query, options);
}