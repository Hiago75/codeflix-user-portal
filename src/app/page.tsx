import Banner from './components/Banner'
import Header from './components/Header'
import MovieRow from './components/MovieRow'
import { getFeaturedMovie } from './service/MovieRequest'

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('101');

  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b from-transparent to-black'>
      <Header />
      <main className='relative pb24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />

        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='See again' />
        <MovieRow sectionTitle='May be of interested' />
      </main>
    </div>
  )
}
