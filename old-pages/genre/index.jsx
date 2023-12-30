import { fetchApi, BASE_URL } from "@/utils/fetchApi"

function Genres({ results }) {
  console.log(results)
  const genres = results.data;
  return (
    <div>
      {genres.map(genre => (
        <a className="block" href={`/anime/genre/${genre.name}`}>{genre.name}</a>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const results = await fetchApi(`${BASE_URL}/genres/anime`)
  return {
    props: { results }
  }
  
}


export default Genres
