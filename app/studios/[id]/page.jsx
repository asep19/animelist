import AnimeCard from "@/components/anime-card"
import Img from "@/components/image"
import { fetchAPI } from "@/utils/fetchApi"

export default async function Page({ params: {id} }) {
  const { data: studio } = await fetchAPI(`/producers/${id}`)
  const { data: animes } = await fetchAPI(`/anime?producers=${id}&order_by=score&sort=desc&limit=10`)

  
  const formatDate = date => new Date(date).toDateString()
  
  return (
    <section className="container mx-auto py-12 space-y-8">
      <div className="flex space-x-4">
        <div>
          <div className="relative w-[250px] aspect-[4/3]">
            <Img
              src={studio.images.jpg.image_url}
              fill={true}
              alt={studio.titles[0].title}
              className="rounded-xl object-cover object-center"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl">{studio?.titles[0]?.title}</h1>
          <p className="text-lg">{studio?.titles[1]?.title}</p>

          <div>
            <p>{`Total anime: ${studio.count}`}</p>
            <p>{`Est ${formatDate(studio.established)}`}</p>
            <p className="text-foreground/70 text-sm">{studio.about}</p>
          </div>
        </div>
      </div>
      <div className="max-w-max grid grid-cols-5 mx-auto">
        {animes.map(props => (
          <AnimeCard {...props} />
        ))}
      </div>
    </section>
  )
}
