import CurrentSeasons from "@/components/current-season"
import TopAnime from "@/components/top-anime"

export default function Page() {
  
  return (
    <section className="container mx-auto space-y-8">
      <TopAnime />
      <CurrentSeasons />
    </section>
  )
}
