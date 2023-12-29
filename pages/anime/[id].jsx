import { fetchApi, BASE_URL } from "@/utils/fetchApi"
import Tag from "@/components/Tag"
import Image from 'next/image'

export default function Page({result}) {
  const anime = result.data
  // console.log(`${BASE_URL}/anime/43608/full`)
  console.log('test')
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div>
          <Image 
            src={anime.images.webp.image_url}
            loader={() => anime.images.webp.image_url}
            width={220}
            height={273}
            alt={anime.title}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1 pl-6">
          <div>
            <h1 className="text-3xl font-bold">{anime.title}</h1>
            <div className="text-lg text-white/70">{anime.title_japanese}</div>
          </div>
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
    </div>
  )
}


// export async function getServerSideProps({ params: {id} }) {
export async function getServerSideProps() {
  const result = await fetchApi(`${BASE_URL}/anime/${43608}/full`)
  return {
    props: { result }
  }
}
