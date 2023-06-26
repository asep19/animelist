import { endpoints, options, baseUrl, defaultList } from '../../utils/fetcher'
import { useRouter } from 'next/router'
import genres from '../../data/genre'
import AnimeCard from '@/components/AnimeCard'


export default function Genre({ byGenre }) {
  const router = useRouter()
  // console.log(byGenre)
  return(
    <>
      <h1 className="text-2xl text-underline">Genre {router.query.genre}</h1>
      <div>
        {
          byGenre.data.map((anime) => (
            <AnimeCard 
              key={anime._id}
              title={anime.title}
              imgUrl={anime.image}
              rating={anime.ranking}
              type={anime.type}
              url={`/anime/${anime._id}`}
            />
          ))
        }
      </div>
    </>
  )
}


export async function getServerSideProps({ params: {genre} }) {
  // const data = await fetch(`${endpoints.genres}=${genres[genre]}`, options)
  const data = await fetch(`${endpoints.genres}=${genre}`, options)
  const byGenre = await data.json()

  return {
    props: {byGenre}
  }
}
