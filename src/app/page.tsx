import Image from 'next/image'
import Header from './components/Header'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b from-transparent to-black lg:h-[140vh]'>
      <Header />
      <main className='relative pb24 pl-4 lg:pl-16'>
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

        <div className='flex-col space-y-4'>
          <div className='-ml-2 flex'>
            <h2 className='inline-flex items-center text-2xl font-bold'>
              Featured
            </h2>
          </div>
          <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div key={index} className='
                group lg:h-[16rem] min-w-[200px] relative transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:scale-110 sm:h-36 rounded
                '>
                <Image
                  src="/item_1.jpg"
                  alt="Stranger Things"
                  className='rounded'
                  fill={true}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
