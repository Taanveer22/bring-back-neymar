import { useState } from 'react';

const inquiryTypes = ['General Inquiries', 'Partnerships', 'Privacy Concerns', 'Technical Support'];

const Contact = () => {
  const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-slate-950" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            />
          </svg>

          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-300">
            Contact The Campaign
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black uppercase leading-none text-white sm:text-6xl md:text-7xl">
          Get In Touch
        </h1>

        {/* Divider */}
        <div className="mt-6 h-1 w-24 rounded-full bg-linear-to-r from-yellow-400 to-transparent" />

        {/* Description */}
        <p className="mt-8 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base md:text-lg">
          Use this form for questions, feedback, partnerships, privacy concerns, or technical
          support related to Neymar Matters.
        </p>

        {/* Pills */}
        <div className="mb-10 mt-8 flex flex-wrap gap-3">
          {inquiryTypes.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-100 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
          {/* Header */}
          <div className="border-b border-white/10 bg-white/5 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-950"
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
              </div>

              <div>
                <h2 className="text-lg font-black uppercase text-white sm:text-xl">
                  Send A Message
                </h2>

                <p className="mt-1 text-xs text-slate-400">We usually respond within 24–48 hours</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-8">
            {/* Inputs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-blue-100"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-blue-100"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-blue-100"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            {/* Checkbox */}
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                className="mt-1 h-5 w-5 rounded border border-yellow-400 bg-transparent accent-yellow-400"
              />

              <span className="text-xs leading-7 text-slate-300 sm:text-sm">
                I agree that Neymar Matters may store my email to reply to this message and send
                campaign-related updates.
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-sm font-black uppercase tracking-widest text-blue-950 shadow-xl transition duration-300 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
            </button>
          </form>

          {/* Footer */}
          <div className="border-t border-white/10 bg-white/5 px-6 py-5 sm:px-8">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 h-4 w-4 shrink-0 text-yellow-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>

              <p className="text-xs leading-6 text-slate-400">
                Please do not include sensitive personal information in your message. Messages are
                securely handled server-side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
