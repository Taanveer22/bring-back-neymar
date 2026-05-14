import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

// 🔴 এখানে অবশ্যই আপনার এক্সপ্রেস ব্যাকএন্ডের সঠিক Vercel লিঙ্কটি দিবেন (ফ্রন্টএন্ড লিঙ্ক নয়)
const BASE_URL = 'https://bring-back-neymar-2.vercel.app';

const Petition = ({ onSuccess }) => {
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

      // ব্যাকএন্ডের credentials এর সাথে মিল রাখতে withCredentials যোগ করা ভালো
      const res = await axios.post(`${BASE_URL}/api/petitions`, formData, {
        withCredentials: true,
      });

      const total = res.data?.totalPetitions ?? 0;

      // update parent
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
    <section className="w-full max-w-xl">
      <div className="rounded-3xl bg-blue-950 p-8 shadow-2xl sm:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white">Petition Form</h1>

          <p className="mt-2 text-sm text-blue-200">
            Sign the petition to support Neymar’s return.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ✅ required যোগ করা হয়েছে */}
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="h-12 w-full rounded-xl bg-blue-900 px-4 text-white outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* ✅ required যোগ করা হয়েছে */}
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="h-12 w-full rounded-xl bg-blue-900 px-4 text-white outline-none focus:ring-2 focus:ring-yellow-400"
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
    </section>
  );
};

export default Petition;
