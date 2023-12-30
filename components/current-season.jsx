import AnimeCard from "./anime-card"

const CurrentSeasons = ({ data }) => {
  return (
    <section className="space-y-6">
      <h1>Current Season</h1>
      <div className="flex flex-wrap items-start">
        {data.map((animeData) => (
          <AnimeCard {...animeData}/>
        ))}
      </div>
    </section>
  )
}

export default CurrentSeasons
