import React from 'react'
import page2 from '../images/page2.png'

const page = () => {
    return (
        <div className='min-h-screen w-full bg-custom-blue flex flex-col '>
            <img src={page2.src} alt="" className="w-full h-full z-10 object-cover fixed" />

            <div className='z-50 text-gray-300 flex justify-start ml-5 mt-[100px] flex-col'>
                <h1 className='text-[18px] w-[150px] font-bold'>Neden Bizimle Keşfetmelisiniz?</h1>
                <p className='text-[12px] mt-5 w-[250px]'>
                    <span className='font-bold'>Eşsiz Bir Deneyim:</span> Deniz altının renkli ve gizemli dünyasında yolculuk yaparak su altı canlılarıyla tanışma fırsatı.
                </p>
                <p className='text-[12px] mt-5 w-[250px]'>
                    <span className='font-bold'>Güvenlik Önceliğimizdir:</span> Tüm ekipmanlarımız en son teknoloji ile donatılmış ve rehberlerimiz profesyonel dalış eğitmenleridir.
                </p>
                <p className='text-[12px] mt-5 w-[250px]'>
                    <span className='font-bold'>Her Yaşa Uygun:</span>  İster yeni başlayan, ister deneyimli bir dalgıç olun, her seviyeye uygun turlarımız ile size en iyi deneyimi sunuyoruz.
                </p>

                <div className='flex justify-center items-center mt-[100px]'>
                    <button
                        className='bg-white text-blue-600 w-[280px] h-[50px] rounded-[10px] hover:bg-gray-300'>
                        <p className='text-[14px] font-semibold'>Hangi Canlılarla Karşılaşacağım?</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page