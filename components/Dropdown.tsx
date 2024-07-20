import React from 'react'
import Link from 'next/link'

function Dropdown() {
  return (
    <div className='flex flex-col dropDownProfile'>
      <ul className='flex flex-col gap-4'>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="./">Home</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
