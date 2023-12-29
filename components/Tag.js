import Link from 'next/link'

export default function Tag({ tag, href }) {
	return(
		<Link href={href}>
			<div className="btn btn-outline btn-accent btn-xs">
				{ tag }	
			</div>
		</Link>
	)
}
