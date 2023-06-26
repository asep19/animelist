export const baseUrl = 'https://anime-db.p.rapidapi.com'
export const defaultList = `${baseUrl}/anime?page=1&size=20&genres=Supernatural&sortBy=ranking&sortOrder=asc`
export const getAnimeById = `${baseUrl}/anime/by-id`

export const endpoints = {
  byId: `${baseUrl}/anime/by-id`,
  genres: `${baseUrl}/anime?page=1&size=20&genres`,
}


export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

