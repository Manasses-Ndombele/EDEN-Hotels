import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "/node_modules/swiper/swiper-bundle.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import chef1 from "../../assets/Chefe-1.jpeg";
import chef2 from "../../assets/Chefe-2.jpg";
import chef3 from "../../assets/Chefe-3.jpg";
import chef4 from "../../assets/Chefe-4.jpg";

function KitchenArea() {
  return (
    <div id="kitchen-area" className="bg-color-e pt-7">
      <div className="md:w-[60%] mx-auto max-w-[500px]">
        <h2 className="dm-serif-display-regular color-b text-3xl uppercase text-center px-3">
          Nossa cozinha e Chefes
        </h2>
        <p className="text-center my-3 libre-baskerville-regular color-a italic px-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          incidunt dolores deserunt dolore.
        </p>
      </div>
      <div
        id="kitchen-area-container"
        className="p-5 overflow-hidden px-8 md:max-w-[800px] md:mx-auto lg:max-w-[90%] xl:max-w-[80%]"
      >
        <Swiper
          modules={[Navigation, A11y]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          speed={1500}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => {
            console.log("slide change");
          }}
          onSwiper={(swiper) => {
            console.log(swiper);
          }}
        >
          <SwiperSlide>
            <div className="card mb-3 max-w-[300px] mx-auto">
              <LazyLoadImage
                src={chef1}
                className="h-[20rem] w-full max-w-[400px] object-cover object-top"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <div className="bg-color-c">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 310"
                  className="translate-y-[-50px] md:translate-y-[-60px] max-h-[10rem]"
                >
                  <path
                    fill="#ff533d"
                    fillOpacity="1"
                    d="M0,32L1440,224L1440,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <p className="translate-y-[-50px] md:translate-y-[-60px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Olívio Mussolini</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-3 max-w-[300px] mx-auto">
              <LazyLoadImage
                src={chef2}
                className="h-[20rem] w-full max-w-[400px] object-cover object-top"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <div className="bg-color-c">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 310"
                  className="translate-y-[-50px] md:translate-y-[-60px]"
                >
                  <path
                    fill="#ff533d"
                    fillOpacity="1"
                    d="M0,32L1440,224L1440,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <p className="translate-y-[-50px] md:translate-y-[-60px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Arménio Rosário</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores magni
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-3 max-w-[300px] mx-auto">
              <LazyLoadImage
                src={chef3}
                className="h-[20rem] w-full max-w-[400px] object-cover object-top"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <div className="bg-color-c">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 310"
                  className="translate-y-[-50px] md:translate-y-[-60px]"
                >
                  <path
                    fill="#ff533d"
                    fillOpacity="1"
                    d="M0,32L1440,224L1440,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <p className="translate-y-[-50px] md:translate-y-[-60px] bg-color-c p-3 italic libre-baskerville-regular color-e">
                <strong>Garcia Óscar</strong> - Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor ea, maiores magni
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mb-3 max-w-[300px] mx-auto">
              <LazyLoadImage
                src={chef4}
                className="h-[20rem] w-full max-w-[400px] object-cover object-top"
                alt="Chefe de cozinha da EDEN Hotels"
              />
              <div className="bg-color-c">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 310"
                  className="translate-y-[-50px] md:translate-y-[-60px]"
                >
                  <path
                    fill="#ff533d"
                    fillOpacity="1"
                    d="M0,32L1440,224L1440,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <p className="translate-y-[-50px] md:translate-y-[-60px] bg-color-c p-3 italic libre-baskerville-regular color-e">
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
