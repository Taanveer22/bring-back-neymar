import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Petition from '../components/Petition';
import Stat from '../components/Stat';

// 🔴 এখানে অবশ্যই আপনার ব্যাকএন্ডের সঠিক Vercel লিঙ্কটি দিবেন (ফ্রন্টএন্ডের লিঙ্ক নয়)
const BASE_URL = 'https://bring-back-neymar-2.vercel.app';

const Home = () => {
  const [petitionCount, setPetitionCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // credentials যুক্ত করা হলো ব্যাকএন্ডের সাথে মিল রাখার জন্য
        const res = await axios.get(`${BASE_URL}/api/petitions/count`, {
          withCredentials: true,
        });

        setPetitionCount(res.data?.totalPetitions ?? 0);
      } catch (error) {
        console.error('Count fetch error:', error);
      }
    };

    fetchCount();
  }, []);

  const handleUpdateCount = (newCount) => {
    setPetitionCount(newCount ?? 0);
  };

  return (
    <div>
      <div className="mb-8 sm:mb-16">
        <Banner />
      </div>

      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        <Stat petitionCount={petitionCount} />
        {/* নিশ্চিত করুন Petition কম্পোনেন্টের ভেতরেও সঠিক BASE_URL ব্যবহার করা হয়েছে */}
        <Petition onSuccess={handleUpdateCount} />
      </div>
    </div>
  );
};

export default Home;
