import Image from 'next/image'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function Banner() {
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black'>
        <Image
          src='/banner1.jpg'
          alt='One piece'
          fill={true}
          className='h-[65vh] object-cover object-top lg:h-[95vh]'
        />
      </div>

      <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
        One Piece
      </h1>

      <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
        Luffy is a young boy who lives in the world of pirates. He is known for his bravery and determination, and he has become one of the most famous pirates in the world.
      </p>

      <div className='flex space-x-3'>
        <button className='flex bg-white text-black md:text-xl cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5'>
          <PlayIcon className='h-6' />
          Play
        </button>

        <button className='flex bg-gray-600 text-black md:text-xl cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5'>
          <InformationCircleIcon className='h-6' />
          More info
        </button>
      </div>
    </div>
  )
}