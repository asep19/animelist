import AnimeCard from "@/components/AnimeCard";
// import { baseUrl, options, endpoints } from "../utils/fetcher"
import { baseUrl, fetchApi } from "../utils/fetchApi";
import HeadTag from "@/components/Head";
import { useState, useEffect } from 'react'

// import GenreList from "@/components/GenreList";


export default function Home({result}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [animeData, setAnimeData] = useState([]);
  
  const searchAnime = async (title) => {
    const responses = await fetch(`${endpoints.searchAnime}&search=${title}&sortBy=ranking&sortOrder=asc`, options)
    const animes = await responses.json()
    setAnimeData(animes.data)
  }

  useEffect(() => {
    setAnimeData(result.data)
  }, [])
  return (
    <>
      <HeadTag title="Top Anime"/>

      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <input
            className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search website..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => searchAnime(searchTerm)} className="btn btn-sm btn-secondary">Search</button>
        </div>
      </header>

      <div className="p-4">
        <h2 className="text-3xl text-blue-400 text-underline">Top Anime</h2>
        {/* {"jumlah anime:" + result.meta.totalData}  */}
        <div className="flex flex-wrap items-start">
          {
            animeData.map((anime) => (
              <AnimeCard 
                key={anime.mal_id}
                title={anime.title}
                imgUrl={anime.images.webp.image_url}
                genres={anime.genres[0].name}
                year={anime.year}
                url={`anime/${anime.mal_id}`}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps() {
	// const response = await fetch(`${baseUrl}/anime?page=1&size=20`, options);
	// const result = await response.json();
  const result = await fetchApi(`${baseUrl}/top/anime`)

  return {
    props: {result}
  }
}
