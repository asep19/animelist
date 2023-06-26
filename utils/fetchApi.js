import axios from "axios";

// export const baseUrl = "https://myanimelist.p.rapidapi.com";

// export const fetchApi = async (url) => {
//   const { data } = await axios.get(url, {
//     headers: {
//       "X-RapidApi-Key": "d7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015",
//       "X-RapidApi-Host": "myanimelist.p.rapidapi.com",
//     },
//   });
//   return data;
// };

export const baseUrl = "https://anime-db.p.rapidapi.com"
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'd7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  })
  return data;

}

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "d7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015",
//     "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
//   },
// };
//
// export const fetchApi = async (url) => {
//   w
// }
//
// fetch('https://myanimelist.p.rapidapi.com/anime/top/all', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// export const fetchApi = async (url) => {
//   const res = await fetch(url);
//   const { data } = res.json();

//   return data;
// };
