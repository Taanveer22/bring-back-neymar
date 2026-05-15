const stats = [
  {
    id: 1,
    value: 128,
    label: 'Matches',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: 2,
    value: 79,
    label: 'Goals',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <path d="M3 3l9 9m0 0l9-9M12 12l-9 9m9-9l9 9" />
        <rect x="2" y="2" width="20" height="20" rx="2" />
      </svg>
    ),
  },
  {
    id: 3,
    value: 59,
    label: 'Assists',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <path d="M5 12h14" />
        <path d="M15 6l6 6-6 6" />
        <path d="M5 6l-2 2 2 2" />
      </svg>
    ),
  },
  {
    id: 4,
    value: 8,
    label: 'WC Goals',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
  },
  {
    id: 5,
    value: 5,
    label: 'CA Goals',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 6,
    value: 7,
    label: 'Oly Goals',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <circle cx="5" cy="12" r="3" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="12" r="3" />
        <circle cx="8.5" cy="7" r="3" />
        <circle cx="15.5" cy="7" r="3" />
      </svg>
    ),
  },
];

const Statistics = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-950 via-green-700 to-blue-900 px-5 py-12 shadow-2xl sm:px-8 lg:px-12">
      <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-emerald-300 opacity-10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-blue-300 opacity-10 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-200/40 bg-white/10 px-4 py-2 text-sm font-semibold tracking-widest text-emerald-100 uppercase backdrop-blur">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Brasil Superstar
        </p>
        <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          Neymar Jr Career Statistics
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-green-100 sm:text-base">
          Neymar Jr continues to inspire millions with his creativity, leadership, goals, and
          unforgettable performances for Brasil on the international stage.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="group rounded-3xl border border-white/10 bg-white/10 p-5 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/20"
          >
            <div className="mb-3 mx-auto w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center transition duration-300 group-hover:scale-110">
              {stat.icon}
            </div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">{stat.value}</h2>
            <div className="mx-auto my-3 h-1 w-12 rounded-full bg-linear-to-r from-emerald-300 to-blue-300" />
            <p className="text-xs font-bold tracking-widest text-green-100 uppercase sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
