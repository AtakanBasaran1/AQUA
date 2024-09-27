"use client"
import React from 'react'
import page2 from '../images/page2.png'
import { TbArrowBackUp } from "react-icons/tb";
import Navbar from '../Navbar'

const page = () => {
    return (
        <div className='min-h-screen fixed w-full bg-custom-blue flex flex-col '>
            <Navbar />
            <img src={page2.src} alt="" className="w-full h-full z-10 object-cover fixed" />

            <div id='hr3'
                onClick={() => window.location.href = '/'}
                className='flex justify-end cursor-pointer z-50 mr-3 text-white'>
                <TbArrowBackUp className='size-8 bg-gray-500 opacity-80 rounded-[300px] p-1 z-50 hover:bg-gray-300 absolute mt-4 ' />
            </div>

            <div id='hr2' className='z-50 mt-[120px] text-gray-300 ml-5 flex flex-col items-start'>

                <h1 className='text-[20px] w-[250px] font-bold text-start'>Neden Bizimle Keşfetmelisiniz?</h1>
                <p className='text-[12px] mt-5 w-[280px] text-start'>
                    <span className='font-bold'>Eşsiz Bir Deneyim:</span> Deniz altının renkli ve gizemli dünyasında yolculuk yaparak su altı canlılarıyla tanışma fırsatı.
                </p>
                <p className='text-[12px] mt-5 w-[280px] text-start'>
                    <span className='font-bold'>Güvenlik Önceliğimizdir:</span> Tüm ekipmanlarımız en son teknoloji ile donatılmış ve rehberlerimiz profesyonel dalış eğitmenleridir.
                </p>
                <p className='text-[12px] mt-5 w-[280px] text-start'>
                    <span className='font-bold'>Her Yaşa Uygun:</span> İster yeni başlayan, ister deneyimli bir dalgıç olun, her seviyeye uygun turlarımız ile size en iyi deneyimi sunuyoruz.
                </p>


            </div>
            <div id='hr3' className='flex z-50 justify-center items-center mt-[120px] relative'>
                <button onClick={() => window.location.href = "/page-3"}
                    className='bg-white text-blue-600 w-[300px] h-[50px] rounded-[8px] hover:bg-gray-300'>
                    <p className='text-[14px] font-semibold'>Tur Paketlerimiz</p>
                </button>
            </div>
        </div>
    )
}

export default page;
