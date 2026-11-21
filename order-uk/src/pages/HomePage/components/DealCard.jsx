function DealCard({ image, discount, type, name }) {
  return (
    <>
      <div
        className="cursor-pointer md:w-100 md:h-67 w-45 h-45 bg-cover bg-center rounded-xl relative px-8 py-5 flex items-end overflow-hidden shadow"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute text-center top-3 right-6">
          <span className="bg-black text-white font-semibold px-3.5 py-4 text-sm rounded-b-xl">
            {discount}
          </span>
        </div>
        <div className="hidden md:block">
          <p className="text-sm text-orange-400">{type}</p>
          <p className="text-2xl font-bold text-white">{name}</p>
        </div>
      </div>
      <div className="block md:hidden pt-3 px-2">
        <p className="text-sm text-orange-400">{type}</p>
        <p className="font-bold text-black">{name}</p>
      </div>
    </>
  );
}

export default DealCard;
