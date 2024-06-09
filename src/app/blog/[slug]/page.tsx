import React from 'react'
import getPageData from '@/lib/getData'
import { postById } from '@/queries/queries';

export async function generateStaticParams() {

  const response = await fetch('https://discover-africa-poc.000webhostapp.com/wp-json/wp/v2/posts/')
  const data = await response.json()

  return data.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export default async function page({ params }: { params: { slug: string } }) {

  const json = await getPageData(postById(params.slug))
  const data = json.data.post;

  return (
    <div className='blog-post'>
      <div className='container'>
        <h1 className=''>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </div>
    </div>
  )
}