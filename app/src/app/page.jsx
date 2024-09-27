"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import page1 from './images/page1.png'
import dogfish from './images/dogfish.png'

const Page = () => {
  return (
    <div className='min-h-screen fixed w-full bg-custom-blue flex flex-col'>
      <img src={page1.src} alt="" className="w-full h-full z-10 object-cover fixed" />

      <div className='z-50 mt-[50px]'>
        <h1 className='mt-[80px] flex ml-10 text-[35px] text-gray-300'>AQUA</h1>

        <p className='w-[260px] text-[14px] ml-10 mt-10 text-gray-300 mb-[-8px]'>
          Türkiye’nin en güzel su altı noktalarında, profesyonel rehberler eşliğinde unutulmaz bir yolculuğa çıkın.
        </p>
        <div className='flex justify-center items-start text-start'>
          <hr className='w-[230px] mb-[-15px] ml-5  ' />
        </div>
        <div className='flex justify-start items-start text-start'>
          <hr className='w-[200px] mb-[-15px] ml-8 ' />
        </div>
        <div className='flex justify-start items-start text-start'>
          <hr className='w-[150px] mb-[300px] ml-[30px] ' />
        </div>
        <div className=' flex justify-center items-center'>
          <button
            onClick={() => window.location.href = '/page-2'}
            className='bg-white w-[300px] h-[50px] hover:bg-gray-300 rounded-[8px]'>
            <p className='text-blue-600 text-[16px] mt-3 font-semibold'>Hemen Başlayın</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page;
