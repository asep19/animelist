import Link from 'next/link';

function AnimeCard({ title, imgUrl, rating, type, url }) {
  // console.log(url)
  return( 
    <Link href={url}>
      <div className="w-[180px] max-h-[300px] inline-block cursor-pointer  border-black p-2">
        <div className=" overflow-hidden relative">
          <img className="object-cover" src={imgUrl} alt={title} /> 
          <span className="absolute bottom-0 right-0 bg-blue-500/80 text-white text-sm px-3 py-0.5">
            {type}
          </span>
        </div>
        <div className="pt-2">
          <h2 className="text-sm">{ title }</h2>
          {/* <div className="flex items-center"> */}
          {/*   <div className="flex items-center">  */}
          {/*     <img className="w-4 h-4" src="/star.svg" alt="" /> */}
          {/*     <img className="w-4 h-4" src="/star.svg" alt="" /> */}
          {/*     <img className="w-4 h-4" src="/star.svg" alt="" /> */}
          {/*     <img className="w-4 h-4" src="/star.svg" alt="" /> */}
          {/*     <img className="w-4 h-4" src="/star.svg" alt="" /> */}
          {/*   </div> */}
          {/*   <span className="ml-2 text-sm text-gray-400">{rating}</span> */}
          {/* </div> */}
        </div>
      </div>
    </Link>
  )
}

export default AnimeCard;
