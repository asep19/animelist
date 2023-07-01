import { useState } from 'react'
// import Tag from './Tag'
import AnimeCard from './AnimeCard'
const Tabs = ({anime}) => {
  const [activeTab, setActiveTab] = useState("tab1")
  console.log(anime)

  const Overview = () => {
    return(
      <div className='flex'>
       <div className='pr-8'>
          <h2 className='text-xl font-bold'>Details</h2>
          <ul>
            {/* <li>{`Alternative Titles: ${alternativeTitles}`}</li> */}
            <li>{`Type: ${anime.type}`}</li>
            <li>{`Episodes: ${anime.episodes}`}</li>
            {/* <li>Genres:  */}
            {/*   {genres.map(genre => ( */}
            {/*     <Tag key={genre} tag={genre} href={`/genres/${genre}`} /> */}
            {/*   ))} */}
            {/* </li> */}
            <li>{`Status: ${anime.status}`}</li>
          </ul>
        
       </div> 
       <div>
          <h2 className='text-xl font-bold'>Description</h2>
          <p>{anime.synopsis}</p>
       </div> 
      </div>
    )
  }


  const Relation = () => {
    return(
     <div>
        Relation

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
      <div>
       {activeTab == 'tab1' ? <Overview /> 
          : activeTab == 'tab2' ? <Relation />
          : <Characters />} 
      </div>
    </div>

  )
}

export default Tabs
