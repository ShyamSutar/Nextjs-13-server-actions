import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className='w-full h-36 bg-stone-100 flex justify-center gap-4 items-center text-stone-500'>
            <Link href='/'>HOME</Link>
            <Link href='/users'>USERS</Link>
        </div>
    </>
  )
}

export default Header