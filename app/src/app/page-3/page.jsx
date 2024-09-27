'use client'
import React from 'react'
import Navbar from '../Navbar'
import page3 from '../images/page3.png'
import { TbArrowBackUp } from "react-icons/tb";

const page = () => {
    return (
        <div className='min-h-screen  w-full bg-custom-blue flex flex-col'>
            <Navbar />
            <img src={page3.src} alt="" className="w-full h-full z-10 object-cover fixed" />
            <div id='hr3'
                onClick={() => window.location.href = '/page-2'}
                className='flex justify-end cursor-pointer z-50 mr-3 text-white'>
                <TbArrowBackUp className='size-8 bg-gray-500 opacity-80 rounded-[300px] p-1 z-50 hover:bg-gray-300 absolute mt-4 ' />
            </div>
            <div className='z-50 flex justify-center mt-[100px] mb-[100px]'>

                <div class="cards">
                    <div id='hr1' class="card red">
                        <p class="tip">Başlangıç Seviye Turu</p>
                        <button
                            className='hover:bg-white rounded-[8px] bg-gray-300 w-[200px] h-[35px] mt-8'
                        ><p className='text-black font-semibold'>Turu İncele</p></button>
                    </div>
                    <div id='hr2' class="card blue">
                        <p class="tip">Keşif Turu</p>
                        <button
                            className='hover:bg-white rounded-[8px] bg-gray-300 w-[200px] h-[35px] mt-8'
                        ><p className='text-black font-semibold'>Turu İncele</p></button>
                    </div>
                    <div id='hr3' class="card green">
                        <p class="tip">Profesyonel Tur</p>
                        <button
                            className='hover:bg-white rounded-[8px] bg-gray-300 w-[200px] h-[35px] mt-8'
                        ><p className='text-black font-semibold'>Turu İncele</p></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page