import React from 'react';
import { MovieCard } from './MovieCard';
import { Movie as MovieType } from '../types/Movie';

export type MoviewRowProps = {
  sectionTitle: string;
  movies: MovieType[]
};

export interface MovieCardProps {
  movie: MovieType;
}

export default function MovieRow({ sectionTitle, movies }: MoviewRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}