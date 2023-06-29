import Search from "./Search"
export default function Header() {
  return (
    <>
      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4"></div>
          {/* <Search /> */}
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, Asep!
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Your website has seen a 52% increase in traffic in the last month. Keep
              it up! 🚀
            </p>
          </div>
        </div>
      </header>

    </>
  )
}
