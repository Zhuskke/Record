import React from 'react'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

export default function navBar() {
  return (
    <header className='bg-base-300 base-b border-base-content/10'>
        <div className='mx-auto p-4 max-w-6xl'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary tracking-tight  '>Record</h1>
                <Link to={"/create"} className='btn btn-primary'>
                <PlusIcon className='size-4' />
                <span>New Note</span>
                </Link>
            </div>
        </div>
    </header>
  )
}
