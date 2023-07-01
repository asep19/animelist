import TestCard from '@/components/TestCard'
import { baseUrl, fetchApi } from '@/utils/fetchApi'

export default function Test({ data }) {
  console.log(data)
  return(
    <>
      <head>
        <title>Test page</title>
      </head>
      <main className='p-4'>
        <h1>Testing Page Here</h1>
        <TestCard />

      </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetchApi(`${baseUrl}/top/anime`)
  return {
    props: {data}
  }
}
