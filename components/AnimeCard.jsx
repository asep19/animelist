import Link from 'next/link';
import Image from 'next/image';

function AnimeCard({ title, imgUrl, genres, url, year }) {
  return( 
    <Link href={url}>
      <div 
        className="w-[192px] h-[273px] m-2 relative rounded-xl cursor-pointer overflow-hidden"
      >
        <figure>
          <Image 
            src={imgUrl}
            loader={() => imgUrl}
            width={192}
            height={273}
            alt={title}
            className="rounded-xl object-cover"
          />
          {/* <img className="rounded-xl" src={imgUrl} /> */}
        </figure>
        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 rounded-xl">      
          <div className="absolute bottom-0 w-full text-white p-3 ">
            <p className="font-semibold truncate">{title}</p>
            <p className="text-sm text-white/80">
              {/* <span>{genres.length < 2 ? genres[0] : `${genres[0]}, ${genres[1]}`}</span> */}
              {`${year !== null ? year+', ' : ''} ${genres}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AnimeCard;
