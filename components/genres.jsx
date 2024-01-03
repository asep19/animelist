import { fetchAPI } from "@/utils/fetchApi"
import Link from "next/link"

export default async function Genres() {
  const response = await fetchAPI('/genres/anime')
  const genres = response.data.sort((a, b) => a.name.localeCompare(b.name))
  console.log(genres)
  
  return (
    <ul className="w-[640px] p-4 text-sm columns-4">
      {genres.map(({ mal_id, name }) => (
        <li key={mal_id} className="p-0.5">
          <Link 
            className="hover:underline hover:text-foreground text-foreground/70"
            href={`/genres/${mal_id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
