import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/css/theme.min.css'

import './assets/js/theme.min.js'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import NewsPage from './pages/News'
import ContactUsPage from './pages/ContactUs'
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/home', element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/contact-us", element: <ContactUsPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
