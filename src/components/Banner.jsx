import neymar10 from '../assets/neymar10.webp';

const Banner = () => {
  return (
    <section className="rounded-2xl bg-linear-to-br from-emerald-950 via-green-700 to-blue-900">
      <div className="grid max-w-7xl px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12">
        {/* Text Section */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-yellow-400">
            ✦ Fans Want Neymar
          </h1>

          <p className="max-w-2xl mb-6 font-light text-white md:text-lg lg:text-xl text-justify">
            The heartbeat of Brasilian football. Neymar Jr brings creativity, passion, leadership,
            and unforgettable moments to the game. Millions believe his return can reignite Brasil’s
            dream of glory.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-lg bg-blue-700 hover:bg-blue-800 w-fit"
          >
            Sign Petition
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Image Section (NOW RESPONSIVE + ALWAYS VISIBLE) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <img
            src={neymar10}
            alt="Neymar"
            className="w-full max-w-sm md:max-w-md lg:max-w-full rounded-xl border-4 border-blue-600 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
