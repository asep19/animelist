import Img from "@/components/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import formatName from "@/lib/format-name"
import { cn } from "@/lib/utils"
import { fetchAPI } from "@/utils/fetchApi"
import { OpenInNewWindowIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default async function VoiceActorPage({ params: {id} }) {
  const getPerson = await fetchAPI(`/people/${id}`)
  const getVoices = await fetchAPI(`/people/${id}/voices`)

  const person = getPerson.data
  const unfilterData = getVoices.data

  function filteredCharacter(data) {
    const newObj = {}

    data.forEach(obj => {
      const id = obj.character.mal_id
      const animeTitle = obj.anime.title
      const animeId =  obj.anime.mal_id
      if(newObj[id]) {
        newObj[id].anime.push([animeId, animeTitle])
      } else {
        newObj[id] = {
          id: id,
          name: obj.character.name,
          images: obj.character.images.jpg.image_url,
          role: obj.role,
          anime: [[animeId, animeTitle]]
        }
      }
    })

    return Object.values(newObj)
  }

  const personVoices = filteredCharacter(unfilterData)
  const formatDate = date => new Date(date).toDateString()
  
  
  
  return (
    <section>
      <div className="container mx-auto py-8">
        <div className="flex items-center space-x-6">
          <div className={cn(
            "shrink-0 shadow-lg",
            "border-[10px] border-b-[24px] border-white -rotate-6",
          )}> 
            <div className={cn(
            "relative w-[230px] aspect-[4/3] bg-white",
            )}>
              
              <Img
                src={person.images.jpg.image_url}
                fill={true}
                alt={person.name}
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="-mt-6">
            <h1 className="text-2xl font-semibold">{person.name}</h1>
            <p>{`${person.family_name} ${person.given_name}`}</p>
            <p className="mt-2">
              <span className="text-foreground/80 mr-2">Birthday:</span> 
              {formatDate(person.birthday)}
            </p>
            <p>
              <span className="text-foreground/80 mr-2">Website:</span>
              {person.website_url ? (
                <a href={person.website_url} target="_blank" className="hover:text-primary underline">
                  {person.website_url}
                  <OpenInNewWindowIcon className="inline-block ml-1 mb-2" />
                </a>
              ): '-'}
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-3 row-start-auto gap-5 mt-12">
          {personVoices.map(({id, name, images, role, anime }) => (
            <li key={id} className="flex h-[142px] overflow-hidden hover:overflow-auto scrollbar-gutter p-2 rounded-lg ">
              <div className="grow-0 relative w-[84px] aspect-[2/3] border-[3px] border-border">
                <Img
                  src={images}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-2 ">
                <div>
                  <p className="font-medium">{formatName(name)}</p>
                  <p className="text-xs text-foreground/70 font-light">{role}</p>
                </div>
                <ul className="mt-1">
                  {anime.map(([id, title])=> (
                    <li className="text-sm text-primary dark:text-primary/60">
                      <Link href={`/${id}`} className="hover:underline">
                        {'- '}{title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
