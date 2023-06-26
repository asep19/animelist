import { animeId, options } from '../../utils/fetcher'


export default function Anime({ anime }) {
  console.log(anime)
  return (
    <div>
      <h2>Anime page</h2>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`${animeId}/1`, options)
  const anime = await data.json()
  return {
    props: { anime }
  }
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "d7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015",
  //     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
  //   },
  // };

  // const res = await fetch(
  //   "https://myanimelist.p.rapidapi.com/anime/1535",
  //   options
  // );
  // const data = await res.json();
  // console.log(data);

  
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015',
// 		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
// 	}
// };

// fetch('https://myanimelist.p.rapidapi.com/anime/1535', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// const url = 'https://anime-db.p.rapidapi.com/anime/by-id/1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'd7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };
// 	const response = await fetch(url, options);
// 	// const result = await response.text();
// 	const anime = await response.json();
  // return {
  //   props: { anime }
  // }

  // return {
  //   props: { },
  // };
}
