import React from 'react'
import { Metadata } from 'next';
import Link from 'next/link'
import getData from '@/lib/getData';
import { threeColComponent } from '@/queries/queries';

export const metadata: Metadata = {
  title: "Discover Africa About Page",
  description: "Luxury African travel - Learn more about us",
  openGraph: {
    title: "Discover Africa About Page",
    description: "Luxury African travel - Learn more about us",
    url: "https://discover-africa-af86d0g28-ryanr26s-projects.vercel.app/",
    siteName: "Discover Africa",
    images: [{
      url: ""
    }]
  }
};

export default async function page() {

  const query = `
  {
    ${threeColComponent('about-us')}
  }`

  const pageData = await getData(query);
  const data = pageData.data.threeColumnComponent;

  return (
    <div className='py-8 text-center'>
      <div className='pb-5'>
        <h1 className='text-4xl text-bold flex justify-center pt-4 pb-2 uppercase'>{data.heading}</h1>
        <h2 className='text-lg'>{data.subheading}</h2>
      </div>
      <div className="mt-8 grid gap-4 grid-cols-12">
        <div className="box flex flex-col align-center justify-start col-span-3 text-right">
          <div className='uppercase bold text-4xl pb-5' dangerouslySetInnerHTML={{__html: data.col1Content}}></div>
        </div>
        <div className="box flex flex-col align-center justify-start col-span-6 px-[20px]">
          <div dangerouslySetInnerHTML={{__html: data.col2Content}}>
          </div>
        </div>
        <div 
          className="box flex flex-col align-center justify-start col-span-3 text-left" 
          dangerouslySetInnerHTML={{__html: data.col3Content}}>
        </div>
      </div>
      <Link href='about/our-team'>Our Team</Link>
      <Link href='about/what-we-do'>What we do</Link>
    </div>
  )
}
