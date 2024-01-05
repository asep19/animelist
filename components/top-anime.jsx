import { fetchAPI } from "@/utils/fetchApi"
import AnimeCard from "./anime-card"

export default async function TopAnime() {
  const response = await fetchAPI('/top/anime?filter=favorite&limit=10&sfw=true')
  const animes = response.data

  return (
    <div>
      <h1 className="text-2xl font-semibold">Top Anime</h1>
      <div className="flex flex-wrap items-start mt-4">
        {animes.map((topAnime) => (
          <AnimeCard key={topAnime.mal_id} {...topAnime}/>
        ))}
      </div>
    </div>
  )
}
