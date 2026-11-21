import PromoBanner from "./PromoBanner";
import First from "../../../assets/images/withUs/first.svg";
import Second from "../../../assets/images/withUs/second.svg";

const withUsItems = [
  {
    id: 1,
    image: First,
    badgeText: "Earn more with lower fees",
    badgeClassName: "px-7",
    title: "Signup as a business",
    description: "Partner with us",
    buttonText: "Get Started",
  },
  {
    id: 2,
    image: Second,
    badgeText: "Avail exclusive perks",
    badgeClassName: "px-10",
    title: "Signup as a rider",
    description: "Ride with us",
    buttonText: "Get Started",
  },
];

function WithUs() {
  return (
    <div className="mx-auto container">
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-10">
        {withUsItems.map(({ id, ...banner }) => (
          <div key={id} className="flex-1">
            <PromoBanner {...banner} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithUs;
