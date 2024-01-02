import Img from "@/components/image"
import formatName from "@/lib/format-name"
import { fetchAPI } from "@/utils/fetchApi"
import Link from "next/link"

export default async function VoiceActorPage({ params: {id} }) {
  const getPerson = await fetchAPI(`/people/${id}`)
  const getVoices = await fetchAPI(`/people/${id}/voices`)

  const person = getPerson.data
  const personVoices = getVoices.data
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex space-x-4">
          <Img
            src={person.images.jpg.image_url}
            width={180}
            height={260}
            alt={person.name}
            className="rounded-md object-cover"
          />
          <div>
            <h1 className="text-2xl">{person.name}</h1>
            <p>{`${person.family_name} ${person.given_name}`}</p>
          </div>
        </div>
        <ul className="flex flex-wrap">
          {personVoices.map(({role, anime, character}) => (
            <li className="w-[360px] flex bg-secondary">
              <Img
                src={character.images.jpg.image_url}
                width={84}
                height={124}
                alt={person.name}
                className="shrink-0 object-cover rounded-tl-md rounded-bl-md"
              />
              <div className="w-full px-2 py-1 flex flex-col justify-between rounded-tr-md rounded-br-md">
                <div className="">
                  <p className="text-lg">{formatName(character.name)}</p>
                  <p className="text-xs text-foreground/80">{role}</p>
                </div>
                <div>
                  <span className="text-xs text-foreground/50 block">From anime:</span>
                  <Link href={`/${anime.mal_id}`} className="text-sm text-primary/80">
                    {anime.title}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
