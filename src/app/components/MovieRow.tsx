import React from 'react';
import { MovieCard } from './MovieCard';

type MoviewRowProps = {
  sectionTitle: string;
};

export default function MovieRow({ sectionTitle }: MoviewRowProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-6 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <MovieCard index={index} />
        ))}
      </div>
    </div>
  )
}