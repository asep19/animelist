import { fetchAPI } from "@/utils/fetchApi"
import AnimeCard from "./anime-card"

const CurrentSeasons = async () => {
  const res = await fetchAPI('/seasons/now')
  const data = res.data
  
  const maxDisplayedAnime = 10
  const filteredData = data.slice(0, maxDisplayedAnime)
  
  return (
    <section className="space-y-6 py-12">
      <h1 className="text-2xl font-semibold">Current Season</h1>
      <div className="flex flex-wrap items-start">
        {filteredData.map((animeData) => (
          <AnimeCard key={animeData.mal_id} {...animeData}/>
        ))}
      </div>
    </section>
  )
}

export default CurrentSeasons
