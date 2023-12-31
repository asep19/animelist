"use client"
import Image from "next/image"

const Img = ({ src, ...props}) => {
  return (
    <Image 
      src={src}
      loader={() => src}
      {...props}
    />
  )
}

export default Img
