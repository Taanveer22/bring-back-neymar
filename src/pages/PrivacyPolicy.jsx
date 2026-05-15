const sections = [
  {
    id: 1,
    color: 'yellow',
    title: 'What We Collect From You',
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    items: [
      'Your name, email, and message when you contact us.',
      'Your email address when you sign up for campaign updates.',
      'Basic technical information like IP address and visit time.',
      'Browser data used to remember petition activity and preferences.',
    ],
  },
  {
    id: 2,
    color: 'green',
    title: 'How We Use Your Info',
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    items: [
      'To keep the campaign and petition pages running properly.',
      'To reply to questions, messages, and support requests.',
      'To protect the platform and prevent misuse.',
      'To send campaign updates only if you opt in.',
    ],
  },
  {
    id: 3,
    color: 'blue',
    title: 'Your Email & Storage',
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
      'If you subscribe for updates, your email is stored securely on our server.',
      'You can unsubscribe anytime through the email link or contact page.',
    ],
  },
  {
    id: 4,
    color: 'yellow',
    title: 'Your Rights',
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    paragraphs: [
      'You may request corrections or deletion of your information at any time.',
      'You may also unsubscribe from updates whenever you want.',
      'If you believe your information has not been handled properly, you may contact your local data protection authority.',
    ],
  },
];

const colorMap = {
  yellow: {
    badge: 'border border-yellow-400/20 bg-yellow-400/10 text-yellow-300',
    icon: 'bg-linear-to-br from-yellow-400 to-yellow-500 text-emerald-950',
    dot: 'bg-yellow-400',
    border: 'border-yellow-400/20',
  },
  green: {
    badge: 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    icon: 'bg-linear-to-br from-emerald-400 to-emerald-500 text-white',
    dot: 'bg-emerald-400',
    border: 'border-emerald-400/20',
  },
  blue: {
    badge: 'border border-blue-400/20 bg-blue-400/10 text-blue-200',
    icon: 'bg-linear-to-br from-blue-400 to-blue-500 text-white',
    dot: 'bg-blue-400',
    border: 'border-blue-400/20',
  },
};

const PrivacyPolicy = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-28">
      {/* ✅ Background updated*/}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-slate-900 to-slate-950" />

      {/* ✅ Glow Effects */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-yellow-300 sm:text-sm">
            Neymar Matters
          </p>

          <h1 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow-400 to-transparent sm:w-32" />

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            We believe in transparency. This page explains what information we collect, why we
            collect it, and how your data is handled across the Neymar Matters campaign platform.
          </p>

          {/* Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['What We Collect', 'How We Use It', 'Your Emails', 'Your Rights'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-yellow-100 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section) => {
            const colors = colorMap[section.color];
            return (
              <div
                key={section.id}
                className={`overflow-hidden rounded-3xl border bg-white/5 shadow-2xl backdrop-blur-2xl ${colors.border}`}
              >
                {/* Header */}
                <div className="border-b border-white/10 bg-white/5 px-6 py-5 sm:px-8 md:px-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${colors.icon}`}
                    >
                      {section.icon}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${colors.badge}`}
                      >
                        Section {section.id}
                      </span>
                      <h2 className="text-lg font-black uppercase text-white sm:text-xl md:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6 sm:px-8 sm:py-8 md:px-10">
                  {section.type === 'list' ? (
                    <ul className="space-y-5">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-4">
                          <span className={`mt-2 h-3 w-3 shrink-0 rounded-full ${colors.dot}`} />
                          <p className="text-sm leading-8 text-slate-200 sm:text-base md:text-lg">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-slate-200 sm:text-base md:text-lg"
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
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl sm:mt-10">
          <div className="flex items-start gap-4 px-6 py-6 sm:px-8 sm:py-8 md:px-10">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 to-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-950"
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
              <h3 className="mb-2 text-lg font-black uppercase text-white">
                Still Have Questions?
              </h3>
              <p className="text-sm leading-8 text-slate-200 sm:text-base">
                If you have questions about your data or anything on this page, please contact us
                through the contact page and we will respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
