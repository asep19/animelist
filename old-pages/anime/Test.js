export const getStaticProps= async () => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const repo = await res.json()
  // return { props: { repo } }

  const res = await fetch('https://api.jikan.moe/v4/anime/99')
  const anime = await res.json()
  return { props: { anime } }
}
 
export default function Page({anime}) {
  // let anim = anime.data;
  return (
    <>
      {/* <p>{anim.mal_id}</p>  */}
      {/* <p>{id}</p> */}
      {/* <p>{full_name}</p> */}
      {/* <p>{}</p> */}
    </>
  )
}
