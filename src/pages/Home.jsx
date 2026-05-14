import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Petition from '../components/Petition';
import Stat from '../components/Stat';

const BASE_URL = 'https://bring-back-neymar-2.vercel.app';

const Home = () => {
  const [petitionCount, setPetitionCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/petitions/count`);

        setPetitionCount(res.data?.totalPetitions ?? 0);
      } catch (error) {
        console.log('Count fetch error:', error);
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
        <Petition onSuccess={handleUpdateCount} />
      </div>
    </div>
  );
};

export default Home;
