'use client'

import React from 'react';
import Link from 'next/link';

export default function Progress() {
  return (
    <nav className="flex flex-row items-start justify-between p-2">
      <Link href='/step-1'>Step 1</Link>
      <Link href='/step-2'>Step 2</Link>
      <Link href='/step-3'>Step 3</Link>
      <Link href='/step-3/step-3-1'>Step 3.1</Link>
    </nav>
  )
}
