const FansCounter = ({ petitionCount }) => {
  return (
    <section className="w-full max-w-xl">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-blue-800 to-blue-700 shadow-2xl">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-yellow-300 opacity-10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-green-300 opacity-10 blur-3xl"></div>

        {/* Brazil Inspired Top Border */}
        <div className="h-2 bg-linear-to-r from-green-400 via-yellow-300 to-green-400"></div>

        <div className="relative z-10 p-8 sm:p-10">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-yellow-200 uppercase backdrop-blur">
              Brasil Fans
            </span>
          </div>

          {/* Counter */}
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-lg transition duration-300 hover:scale-105 sm:text-6xl lg:text-7xl">
              {Number(petitionCount || 0).toLocaleString()}
            </h1>

            {/* Decorative Divider */}
            <div className="mx-auto my-5 h-1 w-24 rounded-full bg-linear-to-r from-green-300 via-yellow-300 to-green-300"></div>

            {/* Subtitle */}
            <p className="text-sm font-semibold tracking-[0.3em] text-blue-100 uppercase sm:text-base">
              Fans Signed Petition
            </p>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-blue-100 sm:text-base">
              Supporters from across the globe are standing together to back Neymar Jr and celebrate
              his unforgettable legacy with Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FansCounter;
