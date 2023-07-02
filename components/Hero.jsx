
const Hero = ({children}) => {
  return(
    <div className="relative h-[650px] w-full">
      <img src="img/hero4.jpg" className="h-full w-full object-cover" alt="banner" />
      <div className="absolute z-20 top-0 w-full h-full bg-gradient-to-r from-black/70"></div>
      { children } 
    </div>
    
  )
}

export default Hero
