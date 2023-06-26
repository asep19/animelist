import AnimeCard from "@/components/AnimeCard";
// import { animes } from "../data/animeData";
import { baseUrl, options } from "../utils/fetcher"
import HeadTag from "@/components/Head";

export default function Home({result}) {
  // console.log(result.data[0].title)
  return (
    <>
      <HeadTag title="Top Anime"/>
      <div className="p-4">
        <h2 className="text-3xl text-blue-400 text-underline">Top Anime</h2>
        {"jumlah anime:" + result.meta.totalData} 
        <div className="flex flex-wrap items-start">
          {
            result.data.map((anime) => (
              <AnimeCard 
                key={anime._id}
                title={anime.title}
                imgUrl={anime.image}
                rating={anime.ranking}
                type={anime.type}
                url={`anime/${anime._id}`}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps() {
	const response = await fetch(`${baseUrl}/anime?page=1&size=10`, options);
	const result = await response.json();

  return {
    props: {result}
  }
}
