import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DealCard from "./DealCard";
import DropDown from "../../../components/ui/DropDown";
import FirstBox from "../../../assets/images/upto/first.svg";
import SecondBox from "../../../assets/images/upto/second.svg";

const deals = [
  { id: 1, image: FirstBox, discount: "-40%", name: "Chef Burgers London" },
  { id: 2, image: SecondBox, discount: "-20%", name: "Grand Ai Cafe London" },
  { id: 3, image: FirstBox, discount: "-20%", name: "Butterbrot Cafe London" },
  { id: 4, image: SecondBox, discount: "-20%", name: "Grand Ai Cafe London" },
];

const categories = ["Vegan", "Sushi", "Pizza & Fast food", "Others"];
const activeCategory = "Pizza & Fast food";

const pillClassName =
  "text-orange-400 border border-orange-400 rounded-full md:px-10 md:py-4 px-5 py-2 cursor-pointer";

function UpTo() {
  return (
    <div className="container mx-auto lg:my-10 my-5 px-2 md:px-0">
      <div className="flex justify-between items-center pb-8">
        <p className="lg:text-3xl md:text-2xl text-xl font-bold">
          Up to -40%{" "}
          <span className="hidden lg:inline-block">Exclusive Deals</span>
          <span className="inline-block lg:hidden">Discount offers</span>
        </p>

        {/* Desktop: category tabs */}
        <ul className="hidden lg:flex items-center gap-5 lg:gap-10">
          {categories.map((category) => (
            <li
              key={category}
              className={
                category === activeCategory ? pillClassName : "cursor-pointer"
              }
            >
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>

        {/* Mobile: same categories as a dropdown */}
        <div className="block lg:hidden">
          <DropDown
            options={categories}
            defaultOption={activeCategory}
            mainClassName={pillClassName}
            boxClassName="bg-orange-400/95 px-2 py-2 top-15 right-0 rounded-xl text-white"
            itemsClassName="hover:bg-orange-300 duration-150 rounded-full"
          />
        </div>
      </div>

      <Swiper slidesPerView="auto" spaceBetween={14}>
        {deals.map(({ id, ...deal }) => (
          <SwiperSlide key={id} className="lg:w-100! md:w-110! w-50!">
            <DealCard type="Restaurant" {...deal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UpTo;
