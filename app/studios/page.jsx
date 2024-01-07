import Img from "@/components/image"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { fetchAPI } from "@/utils/fetchApi"
import Link from "next/link"

export default async function StudioPage({ searchParams }) {
  const page = searchParams['page'] ?? '1'
  const { data: studios, pagination } = await fetchAPI(`/producers?page=${page}&order_by=favorites&sort=desc`)
  
  return (
    <section className="container mx-auto">
      <div className="max-w-max space-y-8 py-8 mx-auto">
        <h1 className="text-2xl">List of Studios/Producers</h1>
        <ul className="grid grid-cols-5 gap-3 ">
          {studios.map(studio => (
          <li key={studio.mal_id} className="max-w-max relative rounded-md hover:scale-105 transition-all duration-300 shadow-md">
            <Link href={`/studios/${studio.mal_id}`}>
              <div className="relative w-[200px] aspect-[4/3] grayscale hover:grayscale-0">
                <Img
                  src={studio.images.jpg.image_url}
                  fill={true}
                  alt={studio.titles[0].title}
                  className="rounded-md object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full dark:bg-black/10 group dark:hover:bg-transparent rounded-md">      
                  <div className="absolute bottom-0 w-full text-white p-2 opacity-0 bg-black/70 group-hover:opacity-100 rounded-br-md rounded-bl-md">
                    <p className="font-semibold truncate">{studio.titles[0].title}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
          ))}
        </ul>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/studios?page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/studios?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  )
}
