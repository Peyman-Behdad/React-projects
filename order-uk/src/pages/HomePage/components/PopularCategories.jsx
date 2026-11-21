import First from "../../../assets/images/popularCategories/first.svg";
import Second from "../../../assets/images/popularCategories/second.svg";
import Third from "../../../assets/images/popularCategories/third.svg";
import Fourth from "../../../assets/images/popularCategories/fourth.svg";
import Fifth from "../../../assets/images/popularCategories/fifth.svg";
import Sixth from "../../../assets/images/popularCategories/sixth.svg";
import BoxCategories from "./BoxCategories";

const categoriesItems = [
  { id: 1, image: First, title: "Burgers & Fast food", description: "21 Restaurants" },
  { id: 2, image: Second, title: "Salads", description: "32 Restaurants" },
  { id: 3, image: Third, title: "Pasta & Casuals", description: "4 Restaurants" },
  { id: 4, image: Fourth, title: "Pizza", description: "32 Restaurants" },
  { id: 5, image: Fifth, title: "Breakfast", description: "4 Restaurants" },
  { id: 6, image: Sixth, title: "Soups", description: "32 Restaurants" },
];

function PopularCategories() {
  return (
    <BoxCategories
      items={categoriesItems}
      title="Popular Categories"
      variant="category"
    />
  );
}

export default PopularCategories;
