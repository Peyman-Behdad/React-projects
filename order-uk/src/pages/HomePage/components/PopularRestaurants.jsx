import First from "../../../assets/images/popularRestaurants/first.svg";
import Second from "../../../assets/images/popularRestaurants/second.svg";
import Third from "../../../assets/images/popularRestaurants/third.svg";
import Fourth from "../../../assets/images/popularRestaurants/fourth.svg";
import Fifth from "../../../assets/images/popularRestaurants/fifth.svg";
import Sixth from "../../../assets/images/popularRestaurants/sixth.svg";
import BoxCategories from "./BoxCategories";

const restaurantsItems = [
  { id: 1, image: First, title: "Burgers & Fast food" },
  { id: 2, image: Second, title: "Salads" },
  { id: 3, image: Third, title: "Pasta & Casuals" },
  { id: 4, image: Fourth, title: "Pizza" },
  { id: 5, image: Fifth, title: "Breakfast" },
  { id: 6, image: Sixth, title: "Soups" },
];

function PopularRestaurants() {
  return (
    <BoxCategories
      items={restaurantsItems}
      title="Popular Restaurants"
      variant="restaurant"
    />
  );
}

export default PopularRestaurants;
