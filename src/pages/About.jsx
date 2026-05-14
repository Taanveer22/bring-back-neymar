const messagePoints = [
  'Experience matters in the biggest tournaments.',
  'Big players create big moments under pressure.',
  'Neymar still belongs on football’s biggest stage.',
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-700 via-emerald-900 to-slate-950" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-yellow-300 sm:text-sm">
            Independent Fan Campaign
          </p>

          <h1 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
            About The Campaign
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow-400 to-transparent sm:w-32" />

          <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            Neymar Matters is an independent fan campaign created by supporters who believe Neymar
            should be part of Brazil’s 2026 World Cup squad.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="mb-5 text-2xl font-black uppercase text-yellow-300 sm:text-3xl md:text-4xl">
                What This Site Does
              </h2>

              <div className="space-y-4">
                <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  This site allows fans to sign the petition, support the campaign, and share the
                  movement with football supporters around the world.
                </p>

                <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  The blog and campaign posts explain why many fans believe Neymar still deserves a
                  place in Brazil’s 2026 World Cup squad.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-3xl border border-yellow-400/10 bg-linear-to-br from-yellow-400/10 to-transparent shadow-2xl backdrop-blur-2xl">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="mb-5 text-2xl font-black uppercase text-white sm:text-3xl md:text-4xl">
                Independent Fan Project
              </h2>

              <div className="space-y-4">
                <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  Neymar Matters is not connected to CBF, FIFA, Neymar Jr, or any football club,
                  sponsor, or broadcaster.
                </p>

                <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  This is a fan-run campaign created for supporters who want their voices heard
                  before the 2026 World Cup.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-3xl border border-blue-400/10 bg-linear-to-br from-blue-500/10 to-transparent shadow-2xl backdrop-blur-2xl">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="mb-8 text-2xl font-black uppercase text-yellow-300 sm:text-3xl md:text-4xl">
                Our Message
              </h2>

              <div className="space-y-5">
                {messagePoints.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-yellow-400" />

                    <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="mb-5 text-2xl font-black uppercase text-blue-200 sm:text-3xl md:text-4xl">
                Questions Or Contact
              </h2>

              <div className="space-y-4">
                <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  For questions, corrections, or privacy requests, please use the contact page.
                </p>

                <p className="text-sm leading-7 text-slate-200 sm:text-base md:text-lg md:leading-8">
                  Supporter information submitted through petitions or forms is handled securely and
                  used only for campaign-related communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
