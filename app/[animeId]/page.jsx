import Link from "next/link";
import { fetchAPI } from "@/utils/fetchApi";
import { badgeVariants } from "@/components/ui/badge"

export default async function Page({ params }) {
  const response = await fetchAPI(`/anime/${params.animeId}`)
  const anime = response.data
  
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">{anime.title}</h1>
        <p className="space-x-2 mb-4">
          {anime.genres.map(({ name }) => (
            <Link 
              href={`genres/${name}`}
              className={badgeVariants({ variant: 'secondary' })}
            >
              {name}
            </Link>
          ))}
        </p>
        <p>{anime.synopsis}</p>
      </div>
    </section>
  )
}
