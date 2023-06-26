import Link from 'next/link'

export default function Tag({ tag, href }) {
	return(
		<Link href={href}>
			<div className="inline-block px-2 py-0.5 bg-blue-400/40 text-sm text-white rounded-sm">
				{ tag }	
			</div>
		</Link>
	)
}
