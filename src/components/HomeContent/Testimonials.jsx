import React, { useEffect } from "react";
import TestimonialsData from "../../utils/TestimonialsData";
import { useDispatch, useSelector } from "react-redux";
import { setTestimonials } from "../../redux/actions/testimonials";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
   Navigation,
   Pagination,
   Scrollbar,
   A11y,
   Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

function Testimonials() {
   const dispatch = useDispatch();
   const testimonialArray = useSelector(state => state.testimonials);

   useEffect(() => {
      dispatch(setTestimonials(TestimonialsData));
   }, []);

   return (
      <div>
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay
            autoHeight
         >
            {testimonialArray.map((item, key) => {
               return (
                  <SwiperSlide>
                     <TestimonialCard {...item} key={key} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}

export default Testimonials;
