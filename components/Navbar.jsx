import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const MobileNav = () => (
  <nav className='md:hidden absolute bottom-0'>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Collections</Link>
      </li>
      <li>
        <Link href="/">C</Link>
      </li>
    </ul>
  </nav>
)

const Navbar = () => {
  return(
    <nav className="navbar bg-black/20 text-white absolute top-0 z-30">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Animelist</a>
      </div>
      <div className="flex-none">
        <Bars3BottomRightIcon className="lg:hidden"/>
        <ul className="menu menu-horizontal px-1 text-lg">
          <li><a className="font-semibold">Collections</a></li>
          <li><a className="font-semibold">Catalog</a></li>
          {/* <li> */}
          {/*   <details> */}
          {/*     <summary> */}
          {/*       Parent */}
          {/*     </summary> */}
          {/*     <ul className="p-2 bg-base-100"> */}
          {/*       <li><a>Link 1</a></li> */}
          {/*       <li><a>Link 2</a></li> */}
          {/*     </ul> */}
          {/*   </details> */}
          {/* </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
