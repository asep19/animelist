import { useState } from 'react'
// import Tag from './Tag'
import AnimeCard from './AnimeCard'
const Tabs = ({anime}) => {
  const [activeTab, setActiveTab] = useState("tab1")
  console.log(anime)
  const paragraph = anime.synopsis.split("\n")


  const Overview = () => {
    return(
      <div className='flex'>
       <div className='w-1/3'>
          <h2 className='text-xl font-bold mb-3'>Details</h2>
          <ul>
            {/* <li>{`Alternative Titles: ${alternativeTitles}`}</li> */}
            <li>
              <span className="mr-2 text-zinc-400">Type:</span>
              <span>{anime.type}</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Status:</span>
              <span>{anime.status}</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Episodes:</span>
              <span>{anime.episodes}</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Studios:</span>
              <span>
                <a className="link link-accent">Ufotable</a>
              </span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Duration:</span>
              <span>23 min per ep</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Year:</span>
              <span>2019</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Season:</span>
              <span>Spring</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Year:</span>
              <span>2019</span>
            </li>
            <li>
              <span className="mr-2 text-zinc-400">Producers:</span>
              <span>
                <a className="link link-accent">Aniplex </a>
              </span>
              
              <span className='mx-1'>•</span>
              <span>
                <a className="link link-accent">Shueisha</a>
              </span>
            </li>
          </ul>
        
       </div> 
       <div className="px-3">
          <h2 className='text-xl font-bold mb-3'>Synopsis</h2>
          <div>
            {paragraph.map(p => (
              <p className='pb-2'>{p}</p>
            ))}
          </div>
       </div> 
      </div>
    )
  }


  const Relation = () => {
    return(
     <div>
        <ul>
          <li>Adaptation(Manga)</li>
          <li>Prequel: Spy Family part 2</li>
        </ul>

      </div> 
    )

  }

  const Characters = () => {
    return(
      <h2>Characters</h2>
    )
  }




  return(
    <div>
      <div className="tabs">
        <a 
          className={`${activeTab == "tab1" ? 'tab-active': ''} tab tab-lg tab-bordered`}
          onClick={() => setActiveTab("tab1")}
        >Overview</a> 
        <a 
          className={`${activeTab == "tab2" ? 'tab-active': ''} tab tab-lg tab-bordered`}
          onClick={() => setActiveTab("tab2")}
        >Relation</a> 
        <a 
          className={`${activeTab == "tab3" ? 'tab-active': ''} tab tab-lg tab-bordered`}
          onClick={() => setActiveTab("tab3")}
        >Characters</a>
      </div>
        {/* <Overview /> */}

      {/* <div>{ showTabContent(activeTab)}</div> */}
      <div className="p-4">
       {activeTab == 'tab1' ? <Overview /> 
          : activeTab == 'tab2' ? <Relation />
          : <Characters />} 
      </div>
    </div>

  )
}

export default Tabs
