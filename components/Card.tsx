import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='item border rounded-xl  border-[#425568] p-3 tracking-wider'>
      <div className='card flex items-center justify-center w-full p-3 gap-x-2'>
        <img src="rocket.png" alt="card-image" className='w-32 h-32' />
        <div>
          <h2 className='font-semibold text-lg'> Intoduction to Rocket Science</h2>
          <p className='text-sm'>Covers fundamentals, design, contruction, operation and programming of robots. Covers fundamentals design and programming of robots</p>
        </div>
      </div>
      <button className='read-btn border border-[#425568] hover:bg-[#425568] rounded-lg w-full p-2 font-semibold text-center'>READ</button>
    </div>
  )
}

export default Card