import { fetchAPI } from "@/utils/fetchApi"
import AnimeCard from "@/components/anime-card"
import { 
  Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious
} from "@/components/ui/pagination"

export default async function Page({ params, searchParams }) {
  const page = searchParams['page'] ?? '1'
  
  const response = await fetchAPI(`/anime?genres=${params.id}&page=${page}&order_by=score&sort=desc`)
  const animes = response.data
  const paginationCount = response.pagination.last_visible_page 

  return (
      <div className="flex flex-wrap items-start">

      {animes.map((anime) => (
        <AnimeCard {...anime}/>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/genres/${params.id}?page=${Number(page) - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/genres/${params.id}?page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
