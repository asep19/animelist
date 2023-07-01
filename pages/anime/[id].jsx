import { getAnimeById, options } from '../../utils/fetcher'
import Tag from '../../components/Tag'
import Link from 'next/link'
import HeadTag from '@/components/Head'
import Tabs from '@/components/Tabs'



export default function Page({ anime }) {
  // console.log(anime)
  return( 
    <>
      <HeadTag title={`${anime.title}`} />
		<div className="container mx-auto">
        <h4 className="text-2xl text-blue-500">
          <Link href="/">Back to Home</Link>
        </h4>
      <div className='flex'>
        <div className="">
          <img className="object-cover" src={anime.image} alt="spy x family" /> 
        </div>
        <div>
          <h1 className="text-2xl font-bold">{anime.title}</h1>
          <p>#{anime.ranking}</p>
        </div>
      </div>
      <Tabs anime={anime}/>
		</div>
    </>
  )
}

export async function getServerSideProps({ params: {id} }) {
  const data = await fetch(`${getAnimeById}/${id}`, options)
  const anime = await data.json()
  return {
    props: { anime }
  }
}
