import Logo from "../../assets/images/logo.svg";
import AppStore from "../../assets/images/appstore.svg";
import PlayStore from "../../assets/images/playstore.svg";
import Facebook from "../../assets/images/footer/Facebook.svg";
import Instagram from "../../assets/images/footer/Instagram.svg";
import Tiktok from "../../assets/images/footer/TikTok.svg";
import Snapchat from "../../assets/images/footer/Snapchat.svg";
import Input from "../ui/Input";

const socialIcons = [
  { name: "Facebook", src: Facebook },
  { name: "Instagram", src: Instagram },
  { name: "TikTok", src: Tiktok },
  { name: "Snapchat", src: Snapchat },
];

const legalPages = [
  "Terms and conditions",
  "Privacy",
  "Cookies",
  "Modern Slavery Statement",
];

const importantLinks = [
  "Get help",
  "Add your restaurant",
  "Sign up to deliver",
  "Create a business account",
];

function Footer() {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="container mx-auto py-20">
        <div className="flex max-md:items-center lg:items-center justify-between flex-col lg:flex-row gap-y-10">
          <div className="space-y-5">
            <img src={Logo} alt="Order.uk" loading="lazy" />
            <div className="flex items-center gap-1">
              <img
                className="w-35"
                src={AppStore}
                alt="Download on the App Store"
                loading="lazy"
              />
              <img
                className="w-35"
                src={PlayStore}
                alt="Get it on Google Play"
                loading="lazy"
              />
            </div>
            <p className="w-75 text-sm">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>
          <div className="flex items-center gap-10 flex-col md:flex-row">
            <div className="space-y-7">
              <p className="font-bold">Get Exclusive Deals in your Inbox</p>
              <div className="space-y-1">
                <Input
                  type="email"
                  label="Email address"
                  placeholder="youremail@gmail.com"
                  buttonText="subscribe"
                  buttonClassName="bg-orange-400 md:px-10 py-3.5 text-white"
                />
                <p className="text-sm pl-5">
                  we won&apos;t spam, read our{" "}
                  <span className="underline cursor-pointer">email policy</span>
                </p>
              </div>
              <div className="flex items-center gap-3 pl-5">
                {socialIcons.map((icon) => (
                  <img
                    key={icon.name}
                    className="w-11 cursor-pointer"
                    src={icon.src}
                    alt={icon.name}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row gap-10 max-md:text-center">
              <ul className="space-y-5">
                <li className="text-lg font-bold">Legal Pages</li>
                {legalPages.map((item) => (
                  <li key={item} className="underline font-light cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-5">
                <li className="text-lg font-bold">Important Links</li>
                {importantLinks.map((item) => (
                  <li key={item} className="underline font-light cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
