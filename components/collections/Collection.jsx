import Link from "next/link"

export const Collection = ({title}) => {
  return (
    <Link href="/collections">
      <div className="card m-3 w-[320px] bg-blue-800 p-4 text-white">
        <h3 className="text-xl mb-4 text-center font-semibold">{title}</h3>
        <img src="img/collections/comedy.png" className="" alt="" />
      </div>
    </Link>
  )
}
