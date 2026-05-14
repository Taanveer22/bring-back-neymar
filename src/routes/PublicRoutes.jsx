import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';

let router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/privacyPolicy',
        Component: PrivacyPolicy,
      },
      {
        path: '/terms',
        Component: Terms,
      },
    ],
  },
]);

export { router };
