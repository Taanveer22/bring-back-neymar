import { useState } from 'react';

// Static inquiry category list
const inquiryTypes = ['General Inquiries', 'Partnerships', 'Privacy', 'Terms'];

const Contact = () => {
  // Store checkbox state
  const [checked, setChecked] = useState(false);

  // Store form input values
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update form fields dynamically
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Currently logging form data
    console.log(form);
  };

  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16 sm:py-20 lg:py-28">
      {/* Multiple background glow effects */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-slate-950" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Grid overlay effect */}
      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Inquiry type pills generated from array */}
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

        {/* Main contact form card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
          {/* Form starts here */}
          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-8">
            {/* Responsive input grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Controlled name input */}
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

              {/* Controlled email input */}
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

            {/* Controlled textarea */}
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

            {/* Checkbox state controlled by React */}
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

            {/* Submit button */}
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-sm font-black uppercase tracking-widest text-blue-950 shadow-xl transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
