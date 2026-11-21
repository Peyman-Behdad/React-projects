const variants = {
  category: {
    box: "bg-gray-100 rounded-xl border border-gray-200 w-50",
    title: "font-bold",
    description: "text-xs text-orange-400",
  },
  restaurant: {
    box: "bg-orange-400 text-white text-center rounded-xl md:w-50 w-40 h-54 md:h-58",
    title: "font-bold py-2",
    description: "",
  },
};

function PopularBox({ image, title, description, variant = "category" }) {
  const styles = variants[variant];

  return (
    <div
      className={`${styles.box} cursor-pointer group hover:shadow-xl shadow-gray-200 duration-150 overflow-hidden`}
    >
      <div>
        <img
          src={image}
          className="group-hover:scale-108 duration-150"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="px-5 py-2">
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

export default PopularBox;
