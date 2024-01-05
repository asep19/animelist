import AnimeCard from "@/components/anime-card"
import { fetchAPI } from "@/utils/fetchApi"

export default async function Page({ params }) {
  const [season, year] = params.season.split('-')
  const response = await fetchAPI(`/seasons/${year}/${season}`)
  const animes = response.data
  return (
      <div className="flex flex-wrap items-start">
      {animes.map((anime) => (
        <AnimeCard key={anime.mal_id} {...anime} />
      ))}
    </div>
  )
}
