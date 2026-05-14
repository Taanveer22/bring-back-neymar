import Banner from '../components/Banner';
import Petition from '../components/Petition';
import Stat from '../components/Stat';

const Home = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-16">
        <Banner></Banner>
      </div>
      <div className="flex gap-12 flex-col lg:flex-row justify-between items-center">
        <Stat></Stat>
        <Petition></Petition>
      </div>
    </div>
  );
};

export default Home;
