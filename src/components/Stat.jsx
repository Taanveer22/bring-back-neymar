const Stat = ({ petitionCount }) => {
  // Static Neymar statistics data
  const stats = [
    { id: 1, value: 128, label: 'Matches' },
    { id: 2, value: 79, label: 'Goals' },
    { id: 3, value: 59, label: 'Assists' },
    { id: 4, value: 8, label: 'WC Goals' },
    { id: 5, value: 5, label: 'CA Goals' },
    { id: 6, value: 7, label: 'Oly Goals' },
  ];

  return (
    <section className="w-full max-w-xl">
      <div className="overflow-hidden rounded-3xl bg-blue-900 shadow-2xl">
        {/* Decorative Brazil-style top stripe */}
        <div className="h-1 bg-linear-to-r from-green-500 via-yellow-400 to-green-500" />

        <div className="p-8 sm:p-10">
          {/* Petition counter section */}
          <div className="mb-10 text-center">
            {/* Convert number to formatted string */}
            {/* Example: 12000 => 12,000 */}
            <h1 className="text-5xl font-black text-yellow-400 sm:text-6xl">
              {Number(petitionCount || 0).toLocaleString()}
            </h1>

            <p className="mt-2 text-sm uppercase tracking-widest text-blue-200">
              Fans Signed Petition
            </p>
          </div>

          {/* Stats cards grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* Loop through stats array */}
            {stats.map((stat) => (
              // Each stat card needs unique key
              <div key={stat.id} className="rounded-2xl bg-white p-5 text-center shadow">
                {/* Stat value */}
                <h2 className="text-3xl font-black text-blue-900">{stat.value}</h2>

                {/* Stat label */}
                <p className="mt-2 text-xs font-bold uppercase text-green-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stat;
