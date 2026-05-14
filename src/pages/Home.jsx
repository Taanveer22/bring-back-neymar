import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Petition from '../components/Petition';
import Stat from '../components/Stat';

const Home = () => {
  // ======================================
  // STATE
  // ======================================

  const [petitionCount, setPetitionCount] = useState(0);

  // ======================================
  // LOAD DATA ON MOUNT (React 19 safe pattern)
  // ======================================

  useEffect(() => {
    let ignore = false;

    (async () => {
      try {
        const response = await axios.get(
          'https://bring-back-neymar-2.vercel.app/api/petitions/count'
        );

        if (!ignore) {
          setPetitionCount(response.data.totalPetitions);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  // ======================================
  // HANDLE UPDATE FROM CHILD (IMPORTANT)
  // ======================================

  const handleUpdateCount = (newCount) => {
    setPetitionCount(() => newCount);
  };

  return (
    <div>
      {/* Banner */}
      <div className="mb-8 sm:mb-16">
        <Banner />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        {/* STAT */}
        <Stat petitionCount={petitionCount} />

        {/* PETITION */}
        <Petition onSuccess={handleUpdateCount} />
      </div>
    </div>
  );
};

export default Home;
