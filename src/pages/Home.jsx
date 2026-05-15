import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from '../api/BaseUrl';
import Banner from '../components/Banner';
import FansCounter from '../components/FansCounter';
import PetitionForm from '../components/PetitionForm';
import Statistics from '../components/Statistics';

const Home = () => {
  const [petitionCount, setPetitionCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
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
      {/* Hero banner section */}
      <div className="mb-8 sm:mb-16">
        <Banner />
      </div>

      {/* ✅ w-full so both cards stretch across full width on desktop */}
      <div className="mb-8 sm:mb-16 flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:justify-center w-full px-4">
        <div className="w-full max-w-xl flex">
          <FansCounter petitionCount={petitionCount} />
        </div>
        <div className="w-full max-w-xl flex">
          <PetitionForm onSuccess={handleUpdateCount} />
        </div>
      </div>

      <Statistics />
    </div>
  );
};

export default Home;
