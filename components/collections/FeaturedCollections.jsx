import { Collection } from "./Collection"


export const FeaturedCollections = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold ml-2 mb-2 text-white text-underline">Featured Collections</h2>
      <div className="flex justify-center items-center">
        <Collection title="The Best Mystical Anime" />
        <Collection title="Top 20 Comedy Anime" />
        <Collection title="Slice of Life Anime" />
      </div>
    </div>
  )
}
