'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {

    const router = useRouter()

    const [search , setSearch] = useState('')
    const onsubmitHandle = async(e)=>{
        e.preventDefault()
        setSearch('')
        router.push(`/users/${search}`)
    }

  return (
    <>
    <form onSubmit={onsubmitHandle}>
        <input
        className='p-1 rounded-md' 
        type="text"
        placeholder='Search by Id'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    </form>  
    </>
  )
}
