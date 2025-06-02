import Banner from './components/Banner'
import Header from './components/Header'
import MovieRow from './components/MovieRow'
import { getFeaturedMovie, getMoviesByGenre } from './service/MovieRequest'

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('101');
  const featuredGenres = ['Drama', 'Action', 'Comedy', 'Animation']

  const movies = await Promise.all(
    featuredGenres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 })

      return { sectionTitle: genre, movies }
    })
  )

  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b from-transparent to-black'>
      <Header />
      <main className='relative pb24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />

        {movies.map((movie) => (
          <MovieRow
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
            movies={movie.movies}
          />
        ))}
      </main>
    </div>
  )
}
