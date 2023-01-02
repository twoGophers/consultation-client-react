import React from 'react';
import TitleBlock from '../ui/titleBlock/Titleblock';
import Margin from '../ui/margin/Margin';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, HashNavigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';


interface Rewiews {
    title: string,
    rewiews: any
}

export default function Reviews({ title, rewiews }: Rewiews) {
  return (
    <div className='reviews' id='rewiews'>
        <Margin />
        <TitleBlock title={title} />
        <Margin />
        <div className="rewiews__slider slider">
            <div className="slider__block-navigation">
                <div className="swiper-prev">
                    <ArrowBackIosNewIcon />
                </div>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                  }}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation= {{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                }}
                modules={[Navigation, HashNavigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"
                >
                {
                rewiews.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <div className="rewiews__slide">
                                <img src={`/rewiews/${item.image}`} alt={item.image} />
                            </div>
                        </SwiperSlide>
                )) 
                }
            </Swiper>   
            <div className="slider__block-navigation">
                <div className="swiper-next">
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    </div>
  )
}
