"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import page1 from './images/page1.png'
import dogfish from './images/dogfish.png'

const Page = () => {
  return (
    <div className='min-h-screen w-full bg-custom-blue flex flex-col'>
      <img src={page1.src} alt="" className="w-full h-full z-10 object-cover fixed" />

      <div className='z-50 mt-[50px]'>
        <h1 className='mt-[80px] flex ml-10 text-[35px] text-gray-300'>AQUA</h1>

        <p className='w-[250px] text-[14px] ml-10 mt-10 text-gray-300'>
          Bir ömür boyu unutamayacağınız bir maceraya atılın! Türkiye’nin en güzel su altı noktalarında, profesyonel rehberler eşliğinde unutulmaz bir yolculuğa çıkın. Şimdi yerinizi ayırtın ve deniz altının büyüleyici dünyasını keşfedin.
        </p>

        <div className='mt-[200px] flex justify-center items-center'>
          <button
            onClick={() => window.location.href = '/page-2'}
            className='bg-white w-[280px] h-[50px] hover:bg-gray-300 rounded-[10px]'>
            <p className='text-blue-600 text-[16px] mt-3 font-semibold'>Hemen Başlayın</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page;
