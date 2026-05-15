import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BASE_URL from '../api/BaseUrl';

const PetitionForm = ({ onSuccess }) => {
  // Store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Loading state for button
  const [loading, setLoading] = useState(false);

  // Success or error message
  const [message, setMessage] = useState('');

  // Update input field dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    // Prevent page reload
    e.preventDefault();

    try {
      // Start loading + clear old message
      setLoading(true);
      setMessage('');

      // Send form data to backend
      const res = await axios.post(`${BASE_URL}/api/petitions`, formData, {
        withCredentials: true,
      });

      // Get updated total petitions
      const total = res.data?.totalPetitions ?? 0;

      // Send updated count to parent component
      onSuccess?.(total);

      // Success UI + toast
      setMessage('Petition signed successfully!');
      toast.success('Petition signed successfully');

      // Reset form fields
      setFormData({ name: '', email: '' });
    } catch (error) {
      // Backend error message
      const msg = error.response?.data?.message || 'Something went wrong';

      setMessage(msg);

      // Show different toast based on error type
      if (error.response?.status === 400) {
        toast.error(msg);
      } else {
        toast.error('Server error. Try again later');
      }

      console.error('Submit error:', error);
    } finally {
      // Stop loading in both success and error cases
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl">
      <div className="rounded-3xl bg-linear-to-br from-blue-950 via-blue-900 to-sky-700 p-8 shadow-2xl sm:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white">Petition Form</h1>

          <p className="mt-2 text-sm text-blue-100">
            Sign the petition to support Neymar’s return.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Required name input */}
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="h-12 w-full rounded-xl border border-blue-400/20 bg-white/10 px-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-sm focus:ring-2 focus:ring-yellow-400"
          />

          {/* Required email input */}
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="h-12 w-full rounded-xl border border-blue-400/20 bg-white/10 px-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-sm focus:ring-2 focus:ring-yellow-400"
          />

          {/* Disable button while request is processing */}
          <button
            disabled={loading}
            className="h-12 w-full rounded-xl bg-yellow-400 font-bold text-blue-950 transition hover:bg-yellow-300 disabled:opacity-50"
          >
            {loading ? 'Signing...' : 'Sign Petition'}
          </button>

          {/* Show message only when message exists */}
          {message && <p className="text-center text-sm text-white">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default PetitionForm;
