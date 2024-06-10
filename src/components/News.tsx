import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface props {
  data: {
    nodes: {
      id: string,
      title: string,
      uri: string,
      slug: string,
      excerpt: string,
      featuredImage: {
        node: {
          sourceUrl: string
        }
      }
    }[]
  }
}

export default function News(props: props) {

  const { data } = props;

  return (
    <div className='py-8'>
      <h2 className='text-4xl text-bold flex justify-center py-5 m-5'>LATEST NEWS</h2>
      <div className='flex gap-5'>
        {
          data.nodes.map((node) => (
            <div className="card w-96 bg-base-100 shadow-xl" key={node.id}>
              <figure>
                { node.featuredImage && 
                  <Link className='w-full' href={`blog/${node.slug}`}>
                    <Image className='object-cover obejct-center w-full max-h-[250px]' src={node?.featuredImage?.node?.sourceUrl} alt='' width='200' height='200'/>
                  </Link>
                }
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <Link href={`blog/${node.slug}`} prefetch={false}>{node.title}</Link>
                </h2>
                <div className="excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                <div className="card-actions justify-end mt-auto pt-10">
                  <Link className="btn btn-primary flex-1" href={`blog/${node.slug}`} prefetch={true}>Learn more</Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
