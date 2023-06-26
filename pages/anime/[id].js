import { getAnimeById, options } from '../../utils/fetcher'
import Tag from '../../components/Tag'
import Link from 'next/link'
import HeadTag from '@/components/Head'



export default function Page({ anime }) {
  // console.log(anime)
  return( 
    <>

      <HeadTag title={`${anime.title}`} />
      {/* <ul> */}
      {/*   <li>{anime.title}</li> */}
      {/*   <li>{anime.episodes}</li> */}
      {/*   <li>{anime.status}</li> */}
      {/*   <li>{anime.synopsis}</li> */}
      {/* </ul> */}
		<div className="p-4">
        <h4 className="text-2xl text-blue-500">
          <Link href="/">Back to Home</Link>
        </h4>
      <div className="">
        <img className="object-cover" src={anime.image} alt="spy x family" /> 
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-bold">{anime.title}</h1>
          <div className="space-x-2">
              {anime.genres.map(genre => (
                <Tag key={genre} tag={genre} href={`/genres/${genre}`} />
              ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Synopsis</h3>
          <p>{anime.synopsis}</p>
        </div>

        <div className="mt-4 flex justify-between">
          <ul className="text-sm">
            <li>
              <span className="font-semibold">Status:&nbsp;</span>
              <span>{anime.status}</span>
            </li>
            <li>
              <span className="font-semibold">Tipe:&nbsp;</span>
              <span>{anime.type}</span>
            </li>
            <li>
              <span className="font-semibold">Episode:&nbsp;</span>
              <span>{anime.episodes}</span>
            </li>
          </ul>
        </div>
      </div>
			{/* <div className="mt-6"> */}
			{/* 	<h2 className="text-xl font-bold">Sinopsis</h2> */}
			{/* 	<p>Kisah fantasi Maple dan kawan-kawan kembali berlanjut di musim kedua.</p> */}
			{/* </div> */}
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
