import AnimeCard from "@/components/AnimeCard";
// import { baseUrl, options, endpoints } from "../utils/fetcher"
import { BASE_URL, fetchApi } from "../utils/fetchApi";
import HeadTag from "@/components/Head";
// import { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FeaturedCollections } from "@/components/collections/FeaturedCollections";

// import GenreList from "@/components/GenreList";



export default function Home({result}) {
// export default function Home() {
  // const [searchTerm, setSearchTerm] = useState("")
  // const animeData = result.data;
  // const [animeData, setAnimeData] = useState([]);
  
  // const searchAnime = async (title) => {
  //   const responses = await fetch(`${endpoints.searchAnime}&search=${title}&sortBy=ranking&sortOrder=asc`, options)
  //   const animes = await responses.json()
  //   setAnimeData(animes.data)
  // }

  console.log(result)
  // useEffect(() => {
  //   setAnimeData(result.data)
  // }, [])
  return (
    <>
      <HeadTag title="Top Anime"/>
      <Hero>
        <Navbar />
        <div className="absolute bottom-48 z-50">
          <div className="w-[550px] px-12 text-white">
            <h1 className="text-4xl font-bold mb-4">Demon Slayer:<br /> Kimetsu no Yaiba</h1>
            <p className="text-lg">
              Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders.
            </p>
            <a href="/" className="btn btn-primary mt-3">Learn More</a>
          </div>
        </div>
      </Hero>

      {/* <header className="bg-gray-50"> */}
      {/*   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"> */}
      {/*     <input */}
      {/*       className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56" */}
      {/*       id="search" */}
      {/*       type="search" */}
      {/*       placeholder="Search website..." */}
      {/*       value={searchTerm} */}
      {/*       onChange={(e) => setSearchTerm(e.target.value)} */}
      {/*     /> */}
      {/*     <button onClick={() => searchAnime(searchTerm)} className="btn btn-sm btn-secondary">Search</button> */}
      {/*   </div> */}
      {/* </header> */}

      <div className="px-8 w-full bg-black/90 absolute">
        <div className="relative -top-24 z-40">
          <h2 className="text-xl font-semibold ml-2 mb-2 text-white text-underline">Special For You</h2>
          {/* {"jumlah anime:" + result.meta.totalData}  */}
          <div className="flex flex-wrap items-start">
            {/* { */}
            {/*   animeData.map((anime) => ( */}
            {/*     <AnimeCard  */}
            {/*       key={anime.mal_id} */}
            {/*       title={anime.title} */}
            {/*       imgUrl={anime.images.webp.image_url} */}
            {/*       genres={anime.genres[0].name} */}
            {/*       year={anime.year} */}
            {/*       url={`anime/${anime.mal_id}`} */}
            {/*     /> */}
            {/*   )) */}
            {/* } */}
          </div>
        </div>
        <FeaturedCollections />
      </div>
    </>
  );
}


export async function getServerSideProps() {
	// const response = await fetch(`${BASE_URL}/top/anime?limit=6`);
	// const result = await response.json();
  const result = await fetchApi(`${BASE_URL}/top/anime?limit=8`)
  // const result = await fetchApi(`https://dummyjson.com/products/1`)
	// const response = await fetch("https://dummyjson.com/products/1");
	// const result = await response.json();

  return {
    props: {result}
  }
}
