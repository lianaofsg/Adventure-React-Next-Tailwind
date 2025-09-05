import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Intro = () => {
  return (
    <section className='max-container padding-container flex 
    flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row 
     '>

      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camping"
          width={50}
          height={50}
          className='abosolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />

        <h1 className='bold-52 lg:bold-88'>AdventureHub Outdoor Center</h1>
        <p className='regular-16 text-grey-40 mt-6 xl:max-w-[520px]' >Experience the thrill of diving into crystal clear waters, camping under starlit skies, and skiing down pristine mountain slopes. We connect you with the world's most amazing outdoor adventures in one comprehensive platform</p>

        <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, i) => (
              <Image
                key={`star-${i}`}
                src="/star.svg"
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>198k
            <span className='regular-16 lg:regular-20 ml-1'>Adventure Reviews</span>
          </p>

          <div className='flex flex-col w-full gap-3 sm:flex-row'>
            <Button
              type='button'
              title='Contack Us'
              variant='btn_green' />


            <Button
              type='button'
              title='How Adventures Work'
              icon='/play.svg'
              variant='btn_white_text' />

          </div>

        </div>
      </div>
 
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              
            </div>
            <p className="bold-20 text-white">Mount Whitney Campsites</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">16.2 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Depth</p>
              <p className="bold-20 text-white">5800 meters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro