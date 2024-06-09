import React from 'react'

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  console.log('PAGE 2', searchParams)

  return (
    <>
    <div>page 2 </div>
    <div>{ searchParams.id }</div>

    </>
  )
}
