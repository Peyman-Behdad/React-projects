function PromoBanner({
  image,
  badgeText,
  badgeClassName,
  title,
  description,
  buttonText,
}) {
  return (
    <div
      className="h-90 py-7 px-15 bg-cover bg-center rounded-xl relative flex items-end overflow-hidden shadow"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-2 left-8">
        <span
          className={`bg-white text-black text-xs sm:text-sm font-bold py-4 rounded-b-xl ${badgeClassName}`}
        >
          {badgeText}
        </span>
      </div>
      <div>
        <p className="text-orange-400">{title}</p>
        <p className="text-4xl font-bold text-white">{description}</p>
        <button
          type="button"
          className="bg-orange-400 text-white px-11 py-2.5 rounded-full mt-8 cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default PromoBanner;
