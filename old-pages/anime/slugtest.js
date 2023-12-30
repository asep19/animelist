import Tag from '../../components/Tag'
import { baseUrl, animeId, options } from '../../utils/fetcher'

export default function AnimePage({ anime }) {
  console.log(anime)
	return(
		<div className="p-4 w-1/2">
			<div>
				<h1 className="text-2xl font-bold">Itai no wa Iya nano de Bougyoryoku ni Kyokufuri Shitai to Omoimasu. (BOFURI) Season 2 Episode (06) Sub Indo</h1>
				<div className="space-x-2">
					<Tag tag="Comedy" />
					<Tag tag="Action" />
					<Tag tag="Adventure" />
				</div>
			</div>
				<p className="mt-4">Kisah fantasi Maple dan kawan-kawan kembali berlanjut di musim kedua.</p>

			<div className="mt-4 flex justify-between">
				<ul className="text-sm">
					<li>
						<span className="font-semibold">Status:&nbsp;</span>
						<span>Ongoing</span>
					</li>
					<li>
						<span className="font-semibold">Studio:&nbsp;</span>
						<span>Silver Link</span>
					</li>
					<li>
						<span className="font-semibold">Dirilis:&nbsp;</span>
						<span>2023</span>
					</li>
					<li>
						<span className="font-semibold">Durasi:&nbsp;</span>
						<span>23 min</span>
					</li>
					<li>
						<span className="font-semibold">Musim:&nbsp;</span>
						<span>Winter 2023</span>
					</li>
					<li>
						<span className="font-semibold">Tipe:&nbsp;</span>
						<span>TV Series</span>
					</li>
					<li>
						<span className="font-semibold">Episode:&nbsp;</span>
						<span>12</span>
					</li>
					<li>
						<span className="font-semibold">Subtitle:&nbsp;</span>
						<span>Indonesia</span>
					</li> 
				</ul>
				<ul className="text-sm">
					<li>
						<span className="font-semibold">Cast:&nbsp;</span>
						<span>Arai, Satomi, Hayami, Saori, Hondo, Kaede, Kakuma</span>
					</li>
					<li>
						<span className="font-semibold">Diposting oleh:&nbsp;</span>
						<span>Admin</span>
					</li>
					<li>
						<span className="font-semibold">Diposting pada:&nbsp;</span>
						<span>Desember 27, 2022</span>
					</li>
					<li>
						<span className="font-semibold">Diperbarui pada:&nbsp;</span>
						<span>Februari 16, 2023</span>
					</li> 
				</ul>																	
			</div>
			{/* <div className="mt-6"> */}
			{/* 	<h2 className="text-xl font-bold">Sinopsis</h2> */}
			{/* 	<p>Kisah fantasi Maple dan kawan-kawan kembali berlanjut di musim kedua.</p> */}
			{/* </div> */}
		</div>
	)
}



export async function getServerSideProps() {
  // const data = await fetch(`${animeId}/1`, options)
  // const anime = await data.json()
  // return {
  //   props: { anime }
  // }
const url = 'https://anime-db.p.rapidapi.com/anime/by-id/1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7575619acmsh72fcd43ed40a67ep16108ajsnaf113432e015',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};
	const response = await fetch(url, options);
	// const result = await response.text();
	const anime = await response.json();
  return {
    props: { anime }
  }
}
