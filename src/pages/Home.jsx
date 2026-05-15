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

      {/* ✅ items-stretch makes both cards equal height on large screens */}
      <div className="mb-8 flex flex-col items-center gap-8 sm:mb-16 lg:flex-row lg:items-stretch">
        <FansCounter petitionCount={petitionCount} />
        <PetitionForm onSuccess={handleUpdateCount} />
      </div>

      <Statistics />
    </div>
  );
};

export default Home;
