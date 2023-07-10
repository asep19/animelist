// import { BASE_URL, fetchApi } from '@/utils/fetchApi'
// import Link from 'next/link'
// import HeadTag from '@/components/Head'
import Tabs from '@/components/Tabs'

import Tag from "@/components/Tag"

const anime = {
  title: "Kimetsu no Yaiba: Hashira Geiko-hen",
  image: "/img/Spy-x-Family-Part-2-214x300.jpg",
  type: "Series",
  episodes: "13",
  status: "aired",
  synopsis: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.\n\nWhen he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity."
}

const paragraph = anime.synopsis.split("\n")



export default function Page() {
// export default function Page({ result }) {
  // console.log(result)
  // const anime = results.data
  return( 
    <>
      {/* <HeadTag title={`${anime.title}`} /> */}
      <div className="container mx-auto">
        <div className="p-6 flex">
          <img src={anime.image} className='rounded-md border-4 border-slate-800' alt="" />
          
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold">{anime.title}</h1>
            {/* <div className="text-xl">{`${anime.title.japanese} • ${anime.title.synonym}`} • </div> */}
            <div className="text-xl">鬼滅の刃 柱稽古編</div>
            <div className="mt-3 space-x-2">
              <Tag tag="Action" href="/genre/Action" />
              <Tag tag="Comedy" href="/genre/Action" />
              <Tag tag="Supranatural" href="/genre/Action" />
            </div>
            <div className="mt-6">
              {/* {paragraph.map(p => ( */}
              {/*   <p className='pb-2'>{p}</p> */}
              {/* ))} */}
              
            </div>
          </div>
        </div>
        {/*   <h4 className="text-2xl text-blue-500"> */}
        {/*     <Link href="/">Back to Home</Link> */}
        {/*   </h4> */}
        {/* <div className='flex'> */}
        {/*   <div className=""> */}
        {/*     <img className="object-cover" src={anime.image} alt="spy x family" />  */}
        {/*   </div> */}
        {/*   <div> */}
        {/*     <h1 className="text-2xl font-bold">{anime.title}</h1> */}
        {/*     <p>#{anime.ranking}</p> */}
        {/*   </div> */}
        {/* </div> */}
        <Tabs anime={anime}/>
      </div>
    </>
  )
}

// export async function getServerSideProps({ params: {id} }) {
//   const data = await fetchApi(`${BASE_URL}/anime/${id}/full`)
//   return {
//     props: { result: data }
//   }
// }
