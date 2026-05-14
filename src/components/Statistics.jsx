const Statistics = () => {
  // Neymar Jr international statistics
  const stats = [
    { id: 1, value: 128, label: 'Matches', icon: '⚽' },
    { id: 2, value: 79, label: 'Goals', icon: '🥅' },
    { id: 3, value: 59, label: 'Assists', icon: '🎯' },
    { id: 4, value: 8, label: 'WC Goals', icon: '🏆' },
    { id: 5, value: 5, label: 'CA Goals', icon: '🔥' },
    { id: 6, value: 7, label: 'Oly Goals', icon: '⭐' },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-blue-700 to-sky-500 px-5 py-12 shadow-2xl sm:px-8 lg:px-12">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-cyan-300 opacity-10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-blue-200 opacity-10 blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center rounded-full border border-cyan-200 bg-white/10 px-4 py-2 text-sm font-semibold tracking-widest text-cyan-100 uppercase backdrop-blur">
          Brasil Superstar
        </p>

        <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Neymar Jr Career Statistics
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
          Neymar Jr continues to inspire millions with his creativity, leadership, goals, and
          unforgettable performances for Brasil on the international stage.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="group rounded-3xl border border-white/10 bg-white/10 p-5 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
          >
            {/* Icon */}
            <div className="mb-3 text-3xl transition duration-300 group-hover:scale-110">
              {stat.icon}
            </div>

            {/* Stat Value */}
            <h2 className="text-3xl font-black text-white sm:text-4xl">{stat.value}</h2>

            {/* Divider */}
            <div className="mx-auto my-3 h-1 w-12 rounded-full bg-linear-to-r from-cyan-200 to-blue-300"></div>

            {/* Label */}
            <p className="text-xs font-bold tracking-widest text-blue-100 uppercase sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
