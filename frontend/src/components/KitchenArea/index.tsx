import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, EffectCards } from "swiper/modules";
import chef1 from "../../assets/Chefes-1.jpeg";
import chef2 from "../../assets/Chefes-2.jpg";
import chef3 from "../../assets/Chefes-3.jpg";
import chef4 from "../../assets/Chefes-4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

function KitchenArea() {
  return (
    <div id="kitchen-area" className="bg-color-e pt-7">
      <h2 className="dm-serif-display-regular color-b text-3xl uppercase text-center">
        Nossa cozinha e Chefes
      </h2>
      <p className="text-center my-3 libre-baskerville-regular color-a italic px-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        incidunt dolores deserunt dolore.
      </p>
      <div id="kitchen-area-container" className="p-5 overflow-hidden">
        <Swiper
          modules={[EffectCards, Navigation, A11y]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          effect="cards"
          speed={1500}
          onSlideChange={() => {
            console.log("slide change");
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
        >
          <SwiperSlide>
            <div className="card mb-3">
              <img
                src={chef1}
                className="h-[20rem] w-full object-cover"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="translate-y-[-50px]"
              >
                <path
                  fill="#ff533d"
                  fillOpacity="1"
                  d="M0,32L1440,224L1440,320L0,320Z"
                ></path>
              </svg>
              <p className="translate-y-[-50px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Olívio Mussolini</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-3">
              <img
                src={chef2}
                className="h-[20rem] w-full object-cover"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="translate-y-[-50px]"
              >
                <path
                  fill="#ff533d"
                  fillOpacity="1"
                  d="M0,32L1440,224L1440,320L0,320Z"
                ></path>
              </svg>
              <p className="translate-y-[-50px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Arménio Rosário</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores magni
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-3">
              <img
                src={chef3}
                className="h-[20rem] w-full object-cover"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="translate-y-[-50px]"
              >
                <path
                  fill="#ff533d"
                  fillOpacity="1"
                  d="M0,32L1440,224L1440,320L0,320Z"
                ></path>
              </svg>
              <p className="translate-y-[-50px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Garcia Óscar</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores magni
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-3">
              <img
                src={chef4}
                className="h-[20rem] w-full object-cover"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="translate-y-[-50px]"
              >
                <path
                  fill="#ff533d"
                  fillOpacity="1"
                  d="M0,32L1440,224L1440,320L0,320Z"
                ></path>
              </svg>
              <p className="translate-y-[-50px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Romário Júnior</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default KitchenArea;
