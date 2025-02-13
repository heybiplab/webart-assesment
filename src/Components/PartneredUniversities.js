import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle';

function PartneredUniversities() {
    return (
        <>
            <section className='partneredUniversities'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='content'>
                                <p>Partner with 350+ universities and companies to learn</p>
                            </div>
                        </div>
                        <div className='col-xl-12'>
                            <Swiper
                                className="partner_slider"
                                modules={[Autoplay]}
                                spaceBetween={0}
                                loop={true}
                                speed={5000}
                                autoplay={{ delay: 0 }}
                                breakpoints={{
                                    370: {
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                    },
                                    991: {
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                    },
                                    1100: {
                                        slidesPerView: 5,
                                        spaceBetween: 0,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className='item'>
                                        Princeton University
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        University of Michigan
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        University of Toronto
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        University of Melbourne
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        Imperial College London
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        University of Washington
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PartneredUniversities