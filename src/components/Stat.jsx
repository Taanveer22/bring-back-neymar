const stats = [
  {
    id: 1,
    value: '128',
    label: 'Matches',
    card: 'bg-green-600 border border-white/15',
    valueStyle: 'text-yellow-400',
    labelStyle: 'text-white',
  },
  {
    id: 2,
    value: '79',
    label: 'Goals',
    card: 'bg-yellow-400 border border-green-600/30',
    valueStyle: 'text-blue-900',
    labelStyle: 'text-green-700',
  },
  {
    id: 3,
    value: '59',
    label: 'Assists',
    card: 'bg-white border border-blue-900/20',
    valueStyle: 'text-blue-900',
    labelStyle: 'text-green-700',
  },
  {
    id: 4,
    value: '8',
    label: 'WC Goals',
    card: 'bg-green-600 border border-white/15',
    valueStyle: 'text-yellow-400',
    labelStyle: 'text-white',
  },
  {
    id: 5,
    value: '5',
    label: 'CA Goals',
    card: 'bg-yellow-400 border border-green-600/30',
    valueStyle: 'text-blue-900',
    labelStyle: 'text-green-700',
  },
  {
    id: 6,
    value: '7',
    label: 'Oly Goals',
    card: 'bg-white border border-blue-900/20',
    valueStyle: 'text-blue-900',
    labelStyle: 'text-green-700',
  },
];

const Stat = () => {
  return (
    <div className="w-full max-w-xl">
      <div className="overflow-hidden rounded-3xl bg-blue-900 shadow-2xl">
        {/* Brazil stripe */}
        <div className="h-1 bg-linear-to-r from-green-600 via-yellow-400 to-green-600" />

        {/* Content */}
        <div className="relative overflow-hidden p-6 sm:p-8 md:p-10">
          {/* Glows */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative z-10">
            {/* Counter */}
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
                Neymar Matters
              </div>

              <h1 className="text-4xl font-black tracking-tight text-yellow-400 sm:text-5xl md:text-6xl">
                54,872,310
              </h1>

              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-blue-300 sm:text-base">
                Fans Demanding Neymar&apos;s Return
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className={`rounded-2xl p-5 transition hover:scale-[1.03] ${stat.card}`}
                >
                  <h2 className={`text-center text-3xl font-black ${stat.valueStyle}`}>
                    {stat.value}
                  </h2>
                  <p
                    className={`mt-2 text-center text-xs font-semibold uppercase tracking-widest ${stat.labelStyle}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
