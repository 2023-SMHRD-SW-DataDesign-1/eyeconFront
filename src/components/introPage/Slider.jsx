import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Lottie from "react-lottie-player";
import lottieJson from "../../lottie/ChatAni.json";
import lottieJson2 from "../../lottie/sliderani.json";
import lottieJson3 from "../../lottie/slider3.json";

function IntroSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    function SlideAni() {
        return (
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: "100%", maxWidth: "700px" }}
            />
        );
    }

    function SlideAni2() {
        return (
            <Lottie
                loop
                animationData={lottieJson2}
                play
                style={{ width: "100%", maxWidth: "650px" }}
            />
        );
    }
    function SlideAni3() {
        return (
            <Lottie
                loop
                animationData={lottieJson3}
                play
                style={{ width: "100%", maxWidth: "600px" }}

            />
        );
    }


    return (
        <Swiper
            style={{ height: "700px", marginTop: "5%" }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="dark:bg-[#82DD0F] bg-[#C4F981] w-full h-full">
                    <div className=" mr-80 flex justify-end text-gray-800">
                        <img src="https://i.ibb.co/XLQb7qV/Untitled-11-01.png" alt="" className="w-[40%] mt-20" /> <SlideAni3 /></div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="dark:bg-[#3275E9] bg-[#609DE4] w-full h-full">

                <div className=" mr-60 flex justify-end text-gray-800">
                    <SlideAni2 /> <img src="https://i.ibb.co/k6GbMwf/Untitled-8-01.png" alt="" className="w-[40%]" /> </div>
            </div></SwiperSlide>
            <SwiperSlide>
                <div className="dark:bg-[#8C8C8C] bg-[#F5EDF6] w-full h-full">

                    <div className=" mr-60 flex justify-end text-gray-800">
                        <img src="https://i.ibb.co/BGVMTtp/1-01.png" alt="" className="w-[50%] mt-20" /> <SlideAni /></div>
                </div>




            </SwiperSlide>








            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    );
}

export default IntroSlider;
