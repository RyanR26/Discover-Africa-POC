import React from 'react'
import styles from './styles.module.css'

export default function page() {
  return (
    <div className={`py-8 text-center ${styles.dark}`}>
      <h1 className='text-4xl text-bold flex justify-center pt-4 pb-2 uppercase'>OUR TEAM</h1>
      <h2 className='text-lg pb-10'>with over 236 (we counted) combined years of travel experience</h2>
    </div>
 
  )
}
