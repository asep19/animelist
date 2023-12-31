import Link from 'next/link';
import Img from './image';
import formatName from '@/lib/format-name';

function VoiceActorCard({ voice_actors }) {
  const japaneseVoiceActor = voice_actors.filter((va) => va.language == "Japanese")
  // const {person: { mal_id, name, images }, language} = japaneseVoiceActor[0] 
  const {person, language} = japaneseVoiceActor[0] 
  return( 
    <Link href={`/voice-actors/${person.mal_id}`}>
      <div 
        className="w-[152px] h-[200px] m-2 relative rounded-xl cursor-pointer overflow-hidden"
      >
        <Img 
          src={person.images.jpg.image_url}
          width={152}
          height={200}
          alt={person.name}
          className="rounded-xl object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/70 rounded-xl transition-colors duration-100 ease-linear hover:bg-black/50 ">      
          <div className="absolute bottom-0 w-full text-white p-2 ">
            <p className="text-sm truncate">{formatName(person.name)}</p>
            <p className="text-xs text-white/60">
              {language}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VoiceActorCard;
