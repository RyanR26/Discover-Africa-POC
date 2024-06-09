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
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href='/ '>Home</Link></li>
          <li>
            <a>About us</a>
            <ul className="p-2 w-max">
              <li><Link href='/about'>Our business</Link></li>
              <li><Link href='/about'>The team</Link></li>
            </ul>
          </li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div> */}
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
      {/* <a className="btn">Button</a> */}
    </div>
  </div>
  )
}