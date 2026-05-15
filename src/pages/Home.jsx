import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from '../api/BaseUrl';
import Banner from '../components/Banner';
import FansCounter from '../components/FansCounter';
import PetitionForm from '../components/PetitionForm';
import Statistics from '../components/Statistics';

const Home = () => {
  // Store total petition count
  const [petitionCount, setPetitionCount] = useState(0);

  // Run only once when component mounts
  useEffect(() => {
    // Fetch current petition count from backend
    const fetchCount = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/petitions/count`, {
          withCredentials: true,
        });

        // Update state with backend count
        setPetitionCount(res.data?.totalPetitions ?? 0);
      } catch (error) {
        console.error('Count fetch error:', error);
      }
    };

    fetchCount();
  }, []);

  // Receive updated count from Petition component
  const handleUpdateCount = (newCount) => {
    setPetitionCount(newCount ?? 0);
  };

  return (
    <div>
      {/* Hero banner section */}
      <div className="mb-8 sm:mb-16">
        <Banner />
      </div>

      {/* Responsive layout for stats + petition form */}
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row mb-8 sm:mb-16">
        {/* Send petition count to  component */}
        <FansCounter petitionCount={petitionCount} />

        {/* Update count after successful petition */}
        <PetitionForm onSuccess={handleUpdateCount} />
      </div>

      <div className="">
        <Statistics></Statistics>
      </div>
    </div>
  );
};

export default Home;
