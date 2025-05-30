import Banner from './components/Banner'
import Header from './components/Header'
import MovieRow from './components/MovieRow'

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b from-transparent to-black'>
      <Header />
      <main className='relative pb24 pl-4 lg:pl-16'>
        <Banner />

        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='See again' />
        <MovieRow sectionTitle='May be of interested' />
      </main>
    </div>
  )
}
