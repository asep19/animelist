export const BASE_URL = "https://api.jikan.moe/v4"

export async function fetchAPI(url, opt= { cache: 'force-cache' }) {
  const res = await fetch(`${BASE_URL}${url}`, opt)
  if(!res.ok) {
    throw new Error('Failed to fetch data.')
  }
  
  return res.json()
}
