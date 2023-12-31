import { fetchAPI } from "@/utils/fetchApi"
import AnimeCard from "@/components/anime-card"

export default async function Page({ params }) {
  const response = await fetchAPI(`/anime?genres=${params.id}&limit=20&order_by=score&sort=desc`)
  const animes = response.data
  console.log(animes)
  return (
      <div className="flex flex-wrap items-start">

      {animes.map((anime) => (
        <AnimeCard {...anime}/>
      ))}
    </div>
  )
}
