import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardsProjects from '../Cards';


function Carousel() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='mt-5 rounded-lg w-full'
            loop={true}
        >
            <SwiperSlide>
                <CardsProjects id={1} img={'bg-transbank'} title={'Simple Soluciones - 2023'} description={'Web Transbank'} />
            </SwiperSlide>
            <SwiperSlide>
                <CardsProjects id={2} img={'bg-ns'} title={'Simple Soluciones - 2023'} description={'N&S estudio dental'}/>
            </SwiperSlide>
            <SwiperSlide>
                <CardsProjects id={3} img={'bg-movistar'} title={'Simple Soluciones - 2023'} description={'Movistar'}/>
            </SwiperSlide>
      
        </Swiper>
    )
}

export default Carousel