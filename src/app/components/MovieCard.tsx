import Image from 'next/image';
import React from 'react';

type MovieCardProps = {
  index: number;
};
export const MovieCard = ({ index }: MovieCardProps) => {
  return (
    <div key={index} className='
                group lg:h-[16rem] min-w-[200px] relative transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:scale-110 sm:h-36 rounded
                '>
      <Image
        src="/item_1.jpg"
        alt="Stranger Things"
        className='rounded'
        fill={true} />
    </div>
  );
};
