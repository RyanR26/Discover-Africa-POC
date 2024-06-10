import React from 'react'
import Image from 'next/image'

interface props {
  data: {
    heading: string,
    subheading: string,
    image: {
      node: {
        sourceUrl: string,
        mediaDetails: {
          width: number,
          height: number
        }
      }
    }
  }
}

export default function Hero(props: props) {

  const { data } = props;

  return (
    <div className='hero-component relative'>
      <div className='content w-max text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-4xl text-white w-max font-extrabold'>{ data.heading }</h1>
        <div className='text-xl'>{ data.subheading }</div>
      </div>
      {
        data?.image?.node?.sourceUrl &&
        <Image 
          src={ data.image.node.sourceUrl } 
          alt='hero image' 
          width={ data.image?.node?.mediaDetails?.width } 
          height={ data.image?.node?.mediaDetails?.height } 
        />
      }
    </div>
  )
}
