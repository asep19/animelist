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

export const baseUrl = "https://api.jikan.moe/v4"
export const fetchApi = async (url) => {
  const { data } = await axios.get(url)
  return data;

}

