import { fetchAPI } from "@/utils/fetchApi"
import Link from "next/link"

export default async function Page() {
  const response = await fetchAPI('/genres/anime')
  const genres = response.data
  return (
    <ul>
      {genres.map(({ mal_id, name }) => (
        <li key={mal_id}>
          <Link 
            href={`/genres/${mal_id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
