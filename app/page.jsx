import CurrentSeasons from "@/components/current-season"

async function getData() {
  const BASE_URL = 'https://api.jikan.moe/v4'
  const res = await fetch(`${BASE_URL}/seasons/now`)

  if(!res.ok) {
    throw new Error('Failed to fetch data.')
  }
  
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return (
    <section className="container mx-auto">
      <CurrentSeasons {...data} />
    </section>
  )
}
