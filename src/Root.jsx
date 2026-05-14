import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Root = () => {
  return (
    <div>
      <div className="mb-8 sm:mb-16">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl w-11/12 mx-auto mb-8 sm:mb-16">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
