import { Link } from 'react-router';

const sections = [
  {
    id: 1,
    color: 'amber',
    title: 'Who We Are',
    type: 'prose',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
    paragraphs: [
      'Neymar Matters is a fan-run website created by supporters — not by Neymar, his team, any club, league, or sponsor.',
      'Everything published here represents fan opinion only and should not be treated as official news or legal advice.',
    ],
  },

  {
    id: 2,
    color: 'violet',
    title: 'How To Use This Site',
    type: 'list',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
    items: [
      'Be respectful and avoid spam, abuse, or illegal activity.',
      'Do not attempt to break or overload the website.',
      'Users who abuse the platform may lose access.',
    ],
  },

  {
    id: 3,
    color: 'emerald',
    title: 'When You Send Us A Message',
    type: 'prose',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    paragraphs: [
      'By submitting a message, you confirm that your content is lawful and belongs to you.',
      'Messages may be stored securely so we can respond and manage platform activity properly.',
    ],
  },

  {
    id: 4,
    color: 'sky',
    title: 'Signing Up For Emails',
    type: 'prose',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    paragraphs: [
      'We only store your email if you explicitly give consent.',
      'You can unsubscribe from updates anytime through the email link or contact page.',
    ],
  },

  {
    id: 5,
    color: 'rose',
    title: 'A Few Important Notes',
    type: 'list',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
    ),
    items: [
      'The website is provided as-is without guarantees.',
      'Opinions shared here belong to fans only.',
      'Terms may change over time as the platform evolves.',
    ],
  },
];

const colorMap = {
  amber: {
    badge: 'border border-yellow-300/20 bg-yellow-400/10 text-yellow-200',
    icon: 'bg-linear-to-br from-yellow-400 to-yellow-500 text-black',
    dot: 'bg-yellow-400',
    border: 'border-yellow-400/20',
  },

  violet: {
    badge: 'border border-blue-300/20 bg-blue-400/10 text-blue-100',
    icon: 'bg-linear-to-br from-blue-400 to-blue-500 text-white',
    dot: 'bg-blue-400',
    border: 'border-blue-400/20',
  },

  emerald: {
    badge: 'border border-emerald-300/20 bg-emerald-400/10 text-emerald-100',
    icon: 'bg-linear-to-br from-emerald-400 to-emerald-500 text-white',
    dot: 'bg-emerald-400',
    border: 'border-emerald-400/20',
  },

  sky: {
    badge: 'border border-cyan-300/20 bg-cyan-400/10 text-cyan-100',
    icon: 'bg-linear-to-br from-cyan-400 to-cyan-500 text-white',
    dot: 'bg-cyan-400',
    border: 'border-cyan-400/20',
  },

  rose: {
    badge: 'border border-red-300/20 bg-red-400/10 text-red-100',
    icon: 'bg-linear-to-br from-red-400 to-red-500 text-white',
    dot: 'bg-red-400',
    border: 'border-red-400/20',
  },
};

const Terms = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-slate-900 to-slate-950" />

      {/* Glow Effects */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-blue-100 backdrop-blur-md sm:text-sm">
            Neymar Matters Rules
          </div>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto max-w-4xl text-base leading-8 text-blue-100/80 sm:text-lg md:text-xl">
            These are the rules and guidelines for using the Neymar Matters campaign website.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section) => {
            const colors = colorMap[section.color];

            return (
              <div
                key={section.id}
                className={`overflow-hidden rounded-3xl border bg-white/10 shadow-2xl backdrop-blur-xl ${colors.border}`}
              >
                {/* Header */}
                <div className="border-b border-white/10 bg-white/5 px-6 py-5 sm:px-8 md:px-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-lg ${colors.icon}`}
                    >
                      {section.icon}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${colors.badge}`}
                      >
                        Section {section.id}
                      </span>

                      <h2 className="text-xl font-black uppercase text-white sm:text-2xl md:text-3xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6 sm:px-8 sm:py-8 md:px-10">
                  {section.type === 'list' ? (
                    <ul className="space-y-4">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-4">
                          <span
                            className={`mt-3 h-2.5 w-2.5 shrink-0 rounded-full ${colors.dot}`}
                          />

                          <p className="text-sm leading-8 text-blue-50/85 sm:text-base md:text-lg">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-blue-50/85 sm:text-base md:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl sm:mt-10">
          <div className="flex items-start gap-4 px-6 py-6 sm:px-8 sm:py-8 md:px-10">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 to-blue-500 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-black uppercase text-white sm:text-xl">
                Got A Question?
              </h3>

              <p className="text-sm leading-8 text-blue-100/80 sm:text-base md:text-lg">
                If anything here is unclear or you have questions about these terms, feel free to
                reach out through our{' '}
                <Link
                  to="/contact"
                  className="font-semibold text-yellow-300 transition hover:text-yellow-200"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
