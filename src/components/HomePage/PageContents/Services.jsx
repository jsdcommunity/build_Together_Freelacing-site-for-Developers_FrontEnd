import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../../../redux/actions/services";

import ServiceCard from "../../HomepageCard/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ServicesData from "../../../utils/ServicesCardData";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Services() {
   const dispatch = useDispatch();
   const servicesArray = useSelector(state => state.services);

   useEffect(() => {
      dispatch(setServices(ServicesData));
   }, []);

   return (
      <div style={{ margin: "2rem" }}>
         <h2 style={{ fontSize: "25px", paddingBottom: "1rem" }}>
            Popular Services
         </h2>
         <Swiper
            navigation
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
               // when window width is >= 0px
               0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
               },
               320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               // when window width is >= 400px
               400: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               // when window width is >= 640px
               640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
               },
               // when window width is >= 1142px
               1142: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
         >
            {servicesArray.map(item => {
               return (
                  <SwiperSlide>
                     <ServiceCard {...item} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}

export default Services;
