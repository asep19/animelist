// import TestCard from '@/components/TestCard'
import { BASE_URL, fetchApi } from '@/utils/fetchApi'
import HeadTag from "@/components/Head"

// export default function Test() {
export default function Test({ data }) {
  console.log(data)
  return(
    <>
      <HeadTag title="Testing Page"/>
      <main className='p-4'>
        <h1>Testing Page Here</h1>
        {/* <TestCard /> */}

      </main>
    </>
  )
}

export async function getServerSideProps() {
  // const data = await fetchApi(`${BASE_URL}/top/anime`)
  const results = await fetch(`${BASE_URL}/top/anime?limit=8`)
  const data = await results.json()
  return {
    props: {data}
  }
}
