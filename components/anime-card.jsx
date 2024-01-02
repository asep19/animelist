import Link from 'next/link';
import Img from './image';

function AnimeCard({mal_id, title, images, genres, year}) {
  return( 
    <Link href={`/${mal_id}`}>
      <div 
        className="w-[192px] h-[273px] m-2 relative rounded-xl cursor-pointer overflow-hidden"
      >
        <figure>
          <Img 
            src={images.webp.image_url}
            width={192}
            height={273}
            alt={title}
            className="rounded-xl object-cover"
          />
          {/* <img className="rounded-xl" src={imgUrl} /> */}
        </figure>
        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/70 rounded-xl transition-colors duration-100 ease-linear hover:bg-black/50 ">      
          <div className="absolute bottom-0 w-full text-white p-3 ">
            <p className="font-semibold truncate">{title}</p>
            <p className="text-sm text-white/80">
              {/* <span>{genres.length < 2 ? genres[0] : `${genres[0]}, ${genres[1]}`}</span> */}
              {`${year !== null ? year+' • ' : ''} ${genres[0].name}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AnimeCard;
