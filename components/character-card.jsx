import Link from 'next/link';
import Img from './image';

function CharacterCard({ character, role }) {
  return( 
    <Link href={`/`}>
      <div 
        className="w-[152px] h-[200px] m-2 relative rounded-xl cursor-pointer overflow-hidden"
      >
        <Img 
          src={character.images.webp.image_url}
          width={152}
          height={200}
          alt={character.name}
          className="rounded-xl object-cover"
        />
        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/70 rounded-xl transition-colors duration-100 ease-linear hover:bg-black/50 ">      
          <div className="absolute bottom-0 w-full text-white p-2 ">
            <p className="text-sm truncate">{character.name.split(',').reverse().join(' ').trim()}</p>
            <p className="text-xs text-white/60">
              {role}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CharacterCard;
