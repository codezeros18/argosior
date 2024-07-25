import React from 'react';
// import phoneImage from './assets/iphone2.jpg'; // Adjust the path as necessary
import JNE from './assets/jne.png'; // Adjust the path as necessary
import SAP from './assets/sap.png'; // Adjust the path as necessary
import LandBack from './assets/landback.png';
import NINJA from './assets/ninja1.png'; // Adjust the path as necessary
import daftarimg from './assets/daftarimg.png'; // Adjust the path as necessary
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Landing() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
    
      const items = [
        {
          title: "Dashboard Lengkap",
          description: "Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan",
            author: "Udinda Sahati"
        },
        {
          title: "Akurat & Cepat",
          description: "Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan",
            author: "Udinda Sahati"
        },
        {
          title: "Mudah & Praktis",
          description: "Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan",
            author: "Udinda Sahati"
        },
        {
          title: "Dashboard Lengkap",
          description: "Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan",
            author: "Udinda Sahati"
        },
        {
          title: "Serba Otomatis",
          description: "Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan",
            author: "Udinda Sahati"
        },
        {
          title: "100% Gratis Tanpa Syarat",
          description: "Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan",
            author: "Udinda Sahati"
        },
      ];
    return (
        <div className="relative isolate pt-2 bg-white min-h-screen font-lexend">
            <div className='mx-auto max-w-1xl pb-10 lg:pb-14 sm:pb-10 lg:py-36 lg:px-2 lg:mx-40 md:mx-20 md:py-60 sm:mx-0'>
                <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1'>
                    <div className='backg relative z-10 lg:z-auto p-6 md:p-0'>
                        <p className='text-bluebar text-[50px] md:text-[50px] lg:text-[60px] font-bold leading-none pb-7 tracking-tight'>
                            Solusi Pengiriman <br />
                            <span className='text-greenhead'>Terpecaya</span> <br />
                            Untuk Bisnis Anda
                        </p>
                        <p className='text-greyhead text-[14px] lg:text-[16px] tracking-tight font-normal leading-[28px]'>
                            Dengan layanan cepat dan aman, kami memastikan setiap paket anda sampai ke tujuan dengan tepat waktu
                        </p>
                        <form className="flex max-w-sm pt-5">   
                            <label className="sr-only">Search</label>
                            <div className="relative w-full border-2 border-solid border-gray-300 rounded-full overflow-hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border-none pl-10 pr-16 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lacak Paket" required />
                                <button type="submit" className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-greenbar rounded-full">
                                    <p className='font-normal tracking-wide text-[14px]'>Search</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden lg:flex lg:items-center lg:justify-center'>
                        <img className='h-[60vh] object-contain' src={LandBack} alt="LandBack" />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-1xl lg:px-2 lg:mx-40 md:mx-20 sm:mx-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-3 gap-x-8">
                                <div className="flex justify-center items-center">
                                    <img className="w-[100px] lg:w-[250px]" src={JNE} alt="JNE Logo" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img className="w-[100px] lg:w-[250px]" src={SAP} alt="JNE Logo" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <img className="w-[100px] lg:w-[250px]" src={NINJA} alt="Ninja Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-8 px-10 lg:-mt-8 md:px-24">
                            <p className="text-greyhead font-normal text-[16px] pt-6 tracking-wide">
                                Kami telah bekerjasama dengan Ekspedisi
                                ternama yang mendukung pengiriman
                                <br />
                                <span className='text-[24px] text-greyhead font-bold'>COD dan Non-COD</span>
                            </p>
                        </div>
                    </div>
                </div>

            <div className='mx-auto max-w-1xl pb-4 px-8 pt-10 lg:pt-20 lg:pb-10 lg:py-24 lg:px-40 lg:mx-40 md:mx-20 md:py-60 sm:mx-0'>
                <div className='bg-bluebar py-2 px-0 rounded-[50px]'>
                    <p className='text-center text-white tracking-wide text-[10px] lg:text-[18px]'>Sering Kirim Paket COD?</p>
                    <p className='text-center text-white tracking-wide text-[10px] lg:text-[18px]'><a href="" className='underline hover:text-greenbar'>Klik Disini</a> Buat Dapetin Banyak Benefit Dan Promo Menarik</p>
                </div>
            </div>
             <div className='bg-greenbar mt-10'>
                <div className='mx-auto max-w-1xl pb-20 sm:pb-10 lg:py-24 lg:px-2 lg:mx-40 md:mx-20 md:py-60 sm:mx-0'>
                        <div className='p-2 pt-10 lg:pt-0 pb-10 lg:pb-0 text-center lg:text-left'>
                            <p className='text-[24px] lg:text-[30px] text-white font-bold tracking-tight '>Kenapa Millenium Express ?</p>
                        </div>
                    <div className='grid grid-cols-2 grid-rows-5 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 pt-2 lg:pt-20'>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                        <div className='mx-2 my-2 w-auto h-auto border-2 rounded-[8px] text-white border-white text-center p-5 transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center'>
                            <div className='mb-1'>
                                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a4 4 0 11-5.44 0M12 14l.01-.01M21 21l-5.7-5.7M15 10a3 3 0 10-6 0 3 3 0 006 0z"></path>
                                </svg>
                            </div>
                            <p className='font-bold leading-[25px] tracking-tight text-[19.5px]'>Dashboard Lengkap</p>
                            <p className='tracking-tighter font-normal leading-[14px] text-[12px] pt-2'>Pantau setiap langkah pengiriman anda dengan dashboard kami yang intuitif dan mudah digunakan</p>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='mx-auto max-w-1xl pb-12 sm:pb-20 lg:py-10 lg:px-2 lg:mx-40 md:mx-20 md:py-60 sm:mx-0'>
                <div className='text-center pt-8 lg:pt-0'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-1'>
                        <div className='hidden lg:flex lg:items-center lg:justify-center'>
                            <img className='h-[40vh]' src={daftarimg} alt="Phone" />
                        </div>
                        <div className='col-span-2 backg1 relative p-6 md:p-0 lg:pt-16'>
                            <p className='text-[20px] tracking-tight lg:text-[40px] leading-none font-bold lg:leading-[50px] text-bluebar pb-4 lg:pb-5 p-5 lg:p-0'>
                            Semua Transaksi Dan Tracking Pengiriman Tersedia Dalam <span className='text-greenhead font-extrabold'>Dashboard</span> Kamu
                            </p>
                            <button className='button1 text-blacktheme text-[14px] font-bold lg:text-[24px] lg:leading-[22px] px-6 lg:px-8 py-2'>Daftar Sekarang</button>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='bg-greenbar'>
                <div className='mx-auto max-w-1xl pb-20 sm:pb-10 lg:py-24 lg:px-2 lg:mx-40 md:mx-20 md:py-60 sm:mx-0'>
                    <div className='p-2 pt-10 lg:pt-0 pb-10 lg:pb-0 text-center lg:text-left'>
                        <p className='text-[20px] lg:text-[30px] font-bold tracking-tight text-white'>Testimoni Pelanggan Milenium Express</p>
                    </div>
                    <Slider {...settings} className='pt-0 lg:pt-10 hover:cursor-pointer'>
                    {items.map((item, index) => (
                        <div>
                            <div key={index} className='mx-2 my-2 w-auto h-auto border-2 text-white border-white text-start p-5 transition duration-300'>
                                <p className='pb-2'>
                                {Array.from({ length: 5 }, (_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                                ))}
                                </p>
                                <p className='font-semibold tracking-tight text-[20px]'>{item.title}</p>
                                <p className='tracking-tighter font-normal text-[14px] lg:text-[18px] pt-2'>{item.description}</p>
                                <p className='tracking-tighter text-gray-200 font-bold text-[14px] lg:text-[18px]  pt-2'>{item.author}</p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            
            {/* <div className='absolute inset-0 lg:hidden' style={{ backgroundImage: `url(${phoneImage})`, backgroundSize: 'cover', backgroundPosition: 'top', zIndex: 0 }}></div> */}
        </div>
        
    );
}

export default Landing;
