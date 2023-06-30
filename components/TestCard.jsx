import Link from "next/link"
const TestCard = () => {
  return(
    <Link href="/">
      <div className="w-48 m-3 relative rounded-xl cursor-pointer">
        <figure>
          <img className="rounded-xl" src="img/Spy-x-Family-Part-2-214x300.jpg" />
        </figure>
        <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/40 rounded-xl">      
          <div className="absolute bottom-0 w-full text-white p-3 ">
            <p className="font-semibold truncate">
              Spy x Family 
            </p>
            <p className="text-sm text-white/80">
              <span>2022, </span>
              <span>Comedy</span>
            </p>
          </div>
        </div>
    </div>
  </Link>
  )
}

export default TestCard
