'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function Nav() {

  const pathname = usePathname();

  return (

  <div className="navbar bg-base-100 border-b-2 border-grey">
    <div className="navbar-start">
      <Link href='/' className="btn btn-ghost text-xl">
        <Image src='/discover-africa-logo.png' alt='site logo' height={100} width={200} />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link href='/ ' className={pathname === '/' ? 'underline': ''}>Home</Link></li>
        <li className='hover-menu'>
          <Link href='/about'  className={pathname === '/about' ? 'underline': ''}>About</Link>
          <ul className="p-2 w-max">
              <li><Link href='/about/what-we-do'>What we do</Link></li>
              <li><Link href='/about/our-team'>The team</Link></li>
            </ul>
         
        </li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
    </div>
  </div>
  )
}