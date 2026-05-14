import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Petition = ({ onSuccess }) => {
  // ======================================
  // FORM STATE
  // ======================================

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // ======================================
  // INPUT HANDLER
  // ======================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ======================================
  // SUBMIT FORM
  // ======================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage('');

      const response = await axios.post('http://localhost:5000/api/petitions', formData);

      // ✅ send data back to Home (React 19 safe pattern)
      onSuccess?.(response.data.totalPetitions);

      setMessage('Petition signed successfully!');
      toast.success('Petition signed successfully');

      setFormData({
        name: '',
        email: '',
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
      toast.error('You already signed the petition');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl">
      <div className="rounded-3xl bg-blue-950 p-8 shadow-2xl sm:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white">Petition Form</h1>

          <p className="mt-2 text-sm text-blue-200">
            Sign the petition to support Neymar’s return.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NAME */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="h-12 w-full rounded-xl bg-blue-900 px-4 text-white outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="h-12 w-full rounded-xl bg-blue-900 px-4 text-white outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* BUTTON */}
          <button
            disabled={loading}
            className="h-12 w-full rounded-xl bg-yellow-400 font-bold text-blue-950 transition hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? 'Signing...' : 'Sign Petition'}
          </button>

          {/* MESSAGE */}
          {message && <p className="text-center text-sm text-white">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Petition;
