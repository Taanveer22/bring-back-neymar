import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Petition from '../components/Petition';
import Stat from '../components/Stat';

// Backend server URL
const BASE_URL = 'https://bring-back-neymar-2.vercel.app';

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
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Send petition count to Stat component */}
        <Stat petitionCount={petitionCount} />

        {/* Update count after successful petition */}
        <Petition onSuccess={handleUpdateCount} />
      </div>
    </div>
  );
};

export default Home;
