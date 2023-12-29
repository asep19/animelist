function Genre() {
  return(
    <div>Genre {genre}</div>
  )
}

export async function({params: {genre}}) {
  return { props: genre}
}

export default Genre;
