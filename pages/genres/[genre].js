import { endpoints, options, baseUrl, defaultList } from '../../utils/fetcher'
import { useRouter } from 'next/router'
import AnimeCard from '@/components/AnimeCard'
import HeadTag from '@/components/Head'
import Link from 'next/link'


export default function Genre({ byGenre }) {
  const router = useRouter()
  const genre = router.query.genre
  // console.log(byGenre)
  return(
    <>
      <HeadTag title={`${genre}`} />
      <h4 className="text-2xl text-blue-500">
        <Link href="/">Back to Home</Link>
      </h4>
      <h1 className="text-2xl text-underline">{`Genre: ${genre}`}</h1>
      <div className="flex flex-wrap items-start">
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
