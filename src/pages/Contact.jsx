import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BASE_URL from '../api/BaseUrl';

const inquiryTypes = ['General Inquiries', 'Partnerships', 'Privacy Concerns', 'Technical Support'];

const Contact = () => {
  const [checked, setChecked] = useState(false);

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checked) {
      return toast.error('Please accept the agreement');
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, form);

      if (response.data.success) {
        toast.success('Message sent successfully! 🎉'); // ✅ success toast
        setForm({ name: '', email: '', message: '' }); // ✅ reset form
        setChecked(false); // ✅ reset checkbox
      } else {
        toast.error(response.data.message); // ✅ backend error toast
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Please try again!');
      // ✅ network error toast
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
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
            Neymar Matters Support
          </div>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-4xl text-base leading-8 text-blue-100/80 sm:text-lg md:text-xl">
            Have questions, partnership ideas, technical issues, or feedback about the Neymar
            Matters campaign? Reach out to our team using the contact form below.
          </p>
        </div>

        {/* Pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {inquiryTypes.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-100 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Contact Card */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
          {/* Card Header */}
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
