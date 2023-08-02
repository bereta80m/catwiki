"use client"
import { UseGlobal } from '@/app/context/GlobalContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MostSearch({params}) {
    const {Searches} = params
    const {catsList} = UseGlobal()
    const Randomizer = ()=>{
        return Math.random() - 0.5
      }
  return (
    <div className='h-screen w-full'>
      <div className='flex flex-col w-full h-screen gap-5'>
        <div className='flex w-full justify-between items-center'>
        <p className='text-2xl font-bold text-[#291507] '>Top 10 Most Search Breeds</p>
        </div>
        <ul className='grid grid-cols-1 gap-10 '>
          {catsList.sort(Randomizer).slice(0,10).map((item,index)=>{
            return(
              <Link href={`/${item.id.toString()}`} className='grid lg:grid-cols-5 gap-5 w-full '>
                <div className='col-span-1 w-52 h-44 rounded-xl'>
                <Image src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`} width={500} height={500} className='w-52 h-44 rounded-xl' />
                </div>
                <div className=' col-span-3 '>
                  <p className='text-2xl font-semibold py-3'>{index + 1}. {item.name}</p>
                  <p className=''>{item.description}</p>
                </div>
              </Link>
            )
          })}
        </ul>
      </div>

    </div>
  )
}

export default MostSearch