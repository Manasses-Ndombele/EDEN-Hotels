import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination, A11y } from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import maid1 from "../../assets/camareira-1.jpg";
import maid2 from "../../assets/camareira-2.jpg";
import maid3 from "../../assets/camareira-3.jpg";

function RoomServiceArea() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="room-service-area" className="bg-color-e p-7">
      <h2 className="dm-serif-display-regular text-3xl text-center uppercase color-b mb-5">
        Serviço de quartos
      </h2>
      <div id="maids-container-slides">
        {isMobile ? (
          <Swiper
            modules={[EffectFlip, Autoplay, Pagination, A11y]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            effect="flip"
            spaceBetween={30}
            flipEffect={{ slideShadows: false }}
            slidesPerView={1}
            speed={1500}
            className="max-w-[380px]"
            onSlideChange={() => {
              console.log("slide change");
            }}
            onSwiper={(swiper) => {
              console.log(swiper);
            }}
          >
            <SwiperSlide>
              <LazyLoadImage
                src={maid1}
                className="w-full h-96 object-cover"
                alt="Camareira da EDEN Hotels"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                src={maid2}
                className="w-full h-96 object-cover"
                alt="Camareira da EDEN Hotels"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LazyLoadImage
                src={maid3}
                className="w-full h-96 object-cover"
                alt="Camareira da EDEN Hotels"
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div
            id="maids-container"
            className="md:flex md:items-center md:justify-center md:gap-3 lg:gap-5 xl:max-w-80%"
          >
            <LazyLoadImage
              src={maid1}
              className="w-100 h-96 object-cover"
              alt="Camareira da EDEN Hotels"
            />
            <LazyLoadImage
              src={maid2}
              className="w-100 h-96 object-cover"
              alt="Camareira da EDEN Hotels"
            />
            <LazyLoadImage
              src={maid3}
              className="w-100 h-96 object-cover"
              alt="Camareira da EDEN Hotels"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomServiceArea;
