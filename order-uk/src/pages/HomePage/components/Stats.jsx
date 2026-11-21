const stats = [
  { id: 1, value: "546+", label: "Registered Riders" },
  { id: 2, value: "789,900+", label: "Orders Delivered" },
  { id: 3, value: "690+", label: "Restaurants Partnered" },
  { id: 4, value: "17,457+", label: "Food items" },
];

function Stats() {
  return (
    <div className="container mx-auto">
      <div className="bg-orange-400 flex flex-col lg:flex-row justify-between items-center max-lg:gap-y-15 px-10 py-6 rounded-xl">
        {stats.map((stat) => (
          <div key={stat.id} className="text-white text-center space-y-1">
            <p className="text-4xl md:text-5xl font-thin">{stat.value}</p>
            <p className="text-base md:text-lg font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
