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
        <p>{anime.title_japanese}</p>
        <p className="space-x-2 mb-4">
          {anime.genres.map(({ name }) => (
            <Link 
              key={name}
              href={`genres/${name}`}
              className={badgeVariants({ variant: 'secondary' })}
            >
              {name}
            </Link>
          ))}
        </p>
        <div>
          <ol>
            <li>
              <span>Studios:</span>
              <span className="space-x-2 ml-2">
                {anime.studios.map(({ name }) =>(
                  <Link
                    key={name}
                    href={`studio/${name}`}
                    >
                    {name}
                  </Link>
                ))}
              </span>
            </li>
            <li>
              <span className="mr-2">Season:</span>
              <Link href={`seasons/${anime.season}-${anime.year}`}>
                <span className="capitalize">{`${anime.season} ${anime.year}`}</span>
              </Link>
            </li>
            <li>
              <span className="mr-2">Score:</span>
              <span>{`${anime.score} (${anime.scored_by})`}</span>
            </li>
            <li>
              <span className="mr-2">Status:</span>
              <span>{anime.status}</span>
            </li>
            <li>
              <span className="mr-2">Episodes:</span>
              <span>{`${anime.episodes} • ${anime.duration}`}</span>
            </li>
          </ol>
        </div>
        <p>{anime.synopsis}</p>
      </div>
    </section>
  )
}
