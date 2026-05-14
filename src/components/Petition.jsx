import { useState } from 'react';

const Petition = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="relative">
          {/* Gradient Layer */}
          <div className="absolute inset-0 -skew-y-3 rounded-3xl bg-linear-to-r from-blue-500 via-blue-600 to-blue-800 shadow-2xl sm:-rotate-3 sm:skew-y-0" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 shadow-2xl sm:p-12">
            {/* Top Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-10">
                <div className="mb-4 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-yellow-300">
                  Neymar Matters
                </div>

                <h1 className="text-3xl font-black uppercase text-white sm:text-4xl">
                  Petition Form
                </h1>

                <p className="mt-4 text-sm leading-7 text-blue-100/80 sm:text-base">
                  Support Neymar&apos;s place in Brazil&apos;s 2026 World Cup squad by signing the
                  petition below.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="peer h-12 w-full border-b-2 border-yellow-400 bg-transparent text-white placeholder-transparent transition focus:border-emerald-400 focus:outline-none"
                  />

                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-4 text-sm font-medium text-yellow-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-emerald-400"
                  >
                    Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="peer h-12 w-full border-b-2 border-yellow-400 bg-transparent text-white placeholder-transparent transition focus:border-emerald-400 focus:outline-none"
                  />

                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-sm font-medium text-yellow-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-emerald-400"
                  >
                    Email
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center rounded-2xl bg-linear-to-r from-yellow-400 to-yellow-500 text-sm font-black uppercase tracking-widest text-blue-950 shadow-lg transition hover:scale-[1.01] hover:from-yellow-300 hover:to-yellow-400"
                >
                  Sign Petition
                </button>
              </form>

              {/* Divider */}
              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-xs uppercase tracking-widest text-blue-200">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white px-5 font-semibold text-slate-800 shadow-lg transition hover:bg-slate-100"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.94 0 7.5 1.36 10.3 3.6l7.7-7.7C37.6 1.6 31.2-.5 24-.5 14.6-.5 6.4 5.4 2.6 13.6l8.9 6.9C13.4 14.1 18.3 9.5 24 9.5z"
                  />

                  <path
                    fill="#34A853"
                    d="M46.1 24c0-1.6-.1-3.1-.4-4.6H24v9h12.6c-.5 2.6-2 4.8-4.2 6.3l6.6 5.1c3.9-3.6 6.1-8.9 6.1-15.8z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M11.5 28.5c-1-2.9-1-6.1 0-9l-8.9-6.9C.9 16.1 0 19.9 0 24c0 4.1.9 7.9 2.6 11.4l8.9-6.9z"
                  />

                  <path
                    fill="#4285F4"
                    d="M24 48c6.5 0 12-2.1 16-5.7l-6.6-5.1c-2.1 1.4-4.8 2.2-7.4 2.2-5.7 0-10.6-3.6-12.4-8.6l-8.9 6.9C6.4 42.6 14.6 48 24 48z"
                  />
                </svg>

                <span>Sign Petition With Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Petition;
