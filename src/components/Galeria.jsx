import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FOTOS } from "../data/data";

const Galeria = () => {
  const randomFotos = FOTOS.sort(() => Math.random() - 0.5).slice(0, 16);

  return (
    <section className="galeria" id="galeria">
      <h2 className="galeria__titulo">Mi Galería</h2>

      <div className="galeria__grid">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          centeredSlides={true}
          className="mySwiper galeria__swiper"
        >
          {randomFotos.map((foto, index) => (
            <SwiperSlide className="galeria__slide" key={index}>
              <picture>
                <source srcSet={foto + ".avif"} type="image/avif" />
                <source srcSet={foto + ".webp"} type="image/webp" />
                <img
                  src={foto + ".png"}
                  alt="Foto Slider"
                  className="galeria__img"
                  width={353}
                  height={"auto"}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Galeria;
