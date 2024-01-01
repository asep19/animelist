import Link from "next/link";
import { fetchAPI } from "@/utils/fetchApi";
import { badgeVariants } from "@/components/ui/badge"
import Img from "@/components/image";
import CharacterCard from "@/components/character-card";
import VoiceActorCard from "@/components/voice-actor-card";
import YoutubeEmbed from "@/components/youtube-embed";

export default async function Page({ params }) {
  const response = await fetchAPI(`/anime/${params.animeId}`)
  const anime = response.data
  const getCharacters = await fetchAPI(`/anime/${params.animeId}/characters`)
  const characters = getCharacters.data
  
  return (
    <section>
      <div className="container mx-auto">
          <Img 
            src={anime.images.webp.image_url}
            width={225}
            height={315}
            alt={anime.title}
            className="rounded-md object-cover"
          />
        <h1 className="text-2xl font-semibold">{anime.title}</h1>
        <p>{anime.title_japanese}</p>
        <p className="space-x-2 mb-4">
          {anime.genres.map(({ mal_id, name }) => (
            <Link 
              key={name}
              href={`genres/${mal_id}`}
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
        <YoutubeEmbed src={anime.trailer.embed_url} />
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Characters & Voice Actors</h2>
          <ul className="grid grid-cols-3 gap-4">
            {characters.map((props) => (
              <li key={props.character.mal_id}>
                <div className="max-w-max flex space-x-2 p-2 border rounded-md">
                  <CharacterCard {...props}/>
                  <VoiceActorCard {...props} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4">{anime.synopsis}</p>
      </div>
    </section>
  )
}
