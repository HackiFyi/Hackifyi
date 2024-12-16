import React from 'react'
import { Animation } from '@hemant0621/animation'

function Hero() {

    
    return (
        <section  className="w-full flex flex-col-reverse gap-24 lg:gap-0 lg:flex-row  justify-center self-center items-center px-10 mb-10">
            <div  className=" hero flex flex-col justify-center lg:ml-6 mt-16">
                <h3 ref={Animation("top","30px",200)} className="font-medium  text-7xl lg:text-9xl text-[#dc143ccb]  mx-auto lg:mx-0">Hacki<span className="text-[#f0f8ff] mx-1">Fyi</span></h3>
                <h4 ref={Animation("left","40px",600)} className=" font-SourceCodePro font-[200] text-sm self-start text-center lg:text-left text-[1rem] lg:text-xl lg:w-[80%] mt-5 min-w-36 max-w-[30rem] lg:min-w-none lg:max-w-none lg:mx-0">Unlock the Code: Tamil Nadu's Largest Hackathon in collaboration with VIT Chennai and Fraternity of Young Innovators</h4>
            </div>
            <div className="animation hidden lg:block lg:mb-10 lg:p-10 lg:mt-10 lg:mr-10 ">
                <div ref={Animation("top","30px",800)} className="view">
                    <div className="plane main flex flex-col items-center h-[10rem] w-[14rem] lg:h-[20rem] lg:w-[20rem]">
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div> 
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                        <div className="circle w-[14rem] h-[10rem] lg:w-[25rem] lg:h-[25rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero