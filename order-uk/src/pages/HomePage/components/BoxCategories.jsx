import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PopularBox from "./PopularBox";

function BoxCategories({ items, title, variant = "category" }) {
  return (
    <div className="container mx-auto overflow-hidden px-2 md:px-0">
      <p className="lg:text-3xl text-xl font-bold">{title}</p>

      {variant === "restaurant" ? (
        <Swiper
          slidesPerView="auto"
          spaceBetween={25}
          className="my-5 md:my-10"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="md:w-50! w-45!">
              <PopularBox
                image={item.image}
                title={item.title}
                description={item.description}
                variant={variant}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="my-5 md:my-10 flex items-center gap-x-3 md:gap-x-0 gap-y-3 justify-center md:justify-between flex-wrap">
          {items.map((item) => (
            <div key={item.id}>
              <PopularBox
                image={item.image}
                title={item.title}
                description={item.description}
                variant={variant}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BoxCategories;
