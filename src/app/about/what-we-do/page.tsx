import React from 'react'
import getData from '@/lib/getData';
import { threeColComponent } from '@/queries/queries';

export default async function page() {

  const query = `
  {
    ${threeColComponent('what-we-do')}
  }`

  const pageData = await getData(query);
  const data = pageData.data.threeColumnComponent;

  return (
    <div className='py-8 text-center'>
      <h1 className='text-4xl text-bold flex justify-center pt-4 pb-2 uppercase'>{data.heading}</h1>
      <h2 className='text-lg pb-10'>{data.subheading}</h2>
      <div className="mt-4 grid sm:grid-flow-col gap-4">
        <div className="box flex flex-col align-center justify-start">
          <div className='flex justify-center pb-8'>
            <div className='w-[180px] h-[180px] bg-center border-4 border-gray rounded-full' style={{ backgroundImage: `url(${data.col1Image.nodes[0].sourceUrl})` }}></div>
          </div>
          <div className='uppercase bold pb-5'>{data.col1Heading}</div>
          <div dangerouslySetInnerHTML={{ __html: data.col1Content}}></div>
        </div>
        <div className="box flex flex-col align-center justify-start">
          <div className='flex justify-center pb-8'>
          <div className='flex justify-center'>
            <div className='w-[180px] h-[180px] bg-center border-4 border-gray rounded-full' style={{ backgroundImage: `url(${data.col2Image.nodes[0].sourceUrl})` }}></div>
          </div>

          </div>
          <div className='uppercase bold pb-5'>{data.col2Heading}</div>
          <div dangerouslySetInnerHTML={{ __html: data.col2Content}}></div>
        </div>
        <div className="box flex flex-col align-center justify-start">
          <div className='flex justify-center pb-8'>
          <div className='flex justify-center'>
            <div className='w-[180px] h-[180px] bg-center border-4 border-gray rounded-full' style={{ backgroundImage: `url(${data.col3Image.nodes[0].sourceUrl})` }}></div>
          </div>
          </div>
          <div className='uppercase bold pb-5'>{data.col3Heading}</div>
          <div dangerouslySetInnerHTML={{ __html: data.col3Content}}></div>
        </div>
      </div>
    </div>
  )
}
