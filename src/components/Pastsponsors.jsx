import { direction } from '@hemant0621/animation'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Pastsponsors() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div ref={direction("top")} className='text-[#f0f8ff] font-extrabold text-4xl mx-5 mt-4 lg:text-7xl lg:mx-10 pt-8'>Past <span className='text-[#b21335] mx-2'>Sponsors</span></div>
            <div className='mt-14 mx-5 lg:mx-20 '>
                <Slider {...settings}>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545656/FYI_Sponsors/image-removebg-preview_16_pr7hu4.png" alt="polygon_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545656/FYI_Sponsors/image-removebg-preview_17_rxjrht.png" alt="replit_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545655/FYI_Sponsors/image-removebg-preview_18_hzw9mp.png" alt="roosto_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545654/FYI_Sponsors/image-removebg-preview_19_trt8gb.png" alt="scaler_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545653/FYI_Sponsors/image-removebg-preview_22_dyv3lu.png" alt="yuvaa_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/yocketedit.png" alt="yocket_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/zeeve_edit.png" alt="zeeve_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545649/FYI_Sponsors/image-removebg-preview_7_xubrg8.png" alt="codingblocks_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545650/FYI_Sponsors/image-removebg-preview_20_dmkr96.png" alt="valeo_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/du.png" alt="dubeat_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/cnedit.png" alt="codingninjas_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545649/FYI_Sponsors/image-removebg-preview_13_qzrdmd.png" alt="icici_bank_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545649/FYI_Sponsors/image-removebg-preview_14_uznkow.png" alt="magoosh_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/augeo.png" alt="augeo_company_logo" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545649/FYI_Sponsors/image-removebg-preview_11_lbmnu8.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="https://res.cloudinary.com/dpdtx7vf4/image/upload/v1701545648/FYI_Sponsors/image-removebg-preview_12_ikxtjl.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/fasttrack.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center  p-2 h-[6rem] md:h-[10rem] lg:h-[14rem] ">
                        <img className='w-full h-full object-contain p-2 md:p-6 lg:p-10  bg-[#161b22] rounded-xl' src="/Sponsors/MyWays.png" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Pastsponsors