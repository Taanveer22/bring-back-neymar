import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BASE_URL from '../api/BaseUrl';

const PetitionForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage('');

      const res = await axios.post(`${BASE_URL}/api/petitions`, formData, {
        withCredentials: true,
      });

      const total = res.data?.totalPetitions ?? 0;
      onSuccess?.(total);

      setMessage('Petition signed successfully!');
      toast.success('Petition signed successfully');
      setFormData({ name: '', email: '' });
    } catch (error) {
      const msg = error.response?.data?.message || 'Something went wrong';
      setMessage(msg);

      if (error.response?.status === 400) {
        toast.error(msg);
      } else {
        toast.error('Server error. Try again later');
      }

      console.error('Submit error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl h-full">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-blue-900 to-sky-700 shadow-2xl h-full flex flex-col">
        {/* Top border */}
        <div className="h-2 bg-linear-to-r from-green-400 via-yellow-300 to-green-400"></div>

        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-yellow-300 opacity-10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-green-300 opacity-10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col flex-1 p-8 sm:p-10">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-yellow-200 uppercase backdrop-blur">
              Join The Movement
            </span>
          </div>

          {/* ✅ Main title — big and bold like FansCounter counter number */}
          <div className="mb-5 text-center">
            <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Be Heard
            </h1>

            {/* ✅ Decorative divider — matches FansCounter exactly */}
            <div className="mx-auto my-5 h-1 w-24 rounded-full bg-linear-to-r from-green-300 via-yellow-300 to-green-300"></div>

            {/* ✅ Subtitle — matches FansCounter subtitle style */}
            <p className="text-sm font-semibold tracking-[0.3em] text-blue-100 uppercase sm:text-base">
              Your Voice Matters
            </p>

            {/* ✅ Description — matches FansCounter description style */}
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-blue-100 sm:text-base">
              Millions of fans believe Neymar Jr deserves one final chapter with Brasil. Add your
              name and be part of football history.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-auto">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="h-12 w-full rounded-xl border border-blue-400/20 bg-white/10 px-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-sm focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="h-12 w-full rounded-xl border border-blue-400/20 bg-white/10 px-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-sm focus:ring-2 focus:ring-yellow-400"
            />

            <button
              disabled={loading}
              className="h-12 w-full rounded-xl bg-yellow-400 font-bold text-blue-950 transition hover:bg-yellow-300 disabled:opacity-50"
            >
              {loading ? 'Signing...' : 'Sign Petition'}
            </button>

            {message && <p className="text-center text-sm text-white">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default PetitionForm;
