import { useSelector } from 'react-redux';
import  { Navigate, Route, Routes } from "react-router-dom";
import Header from '../components/UI/Header';
import Wrapper from '../components/UI/Wrapper';
import HomePage from './Home'
import AboutPage from './About'
import ServicesPage from './Services'
import ContactUsPage from './ContactUs'
import NotFoundPage from './NotFound';

function RootLayout(){
    const theme = useSelector(state => state.theme.theme);

    return (
        <Wrapper className={`page-wrapper ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/services" element={<ServicesPage />}/>
                    <Route path="/contact-us" element={<ContactUsPage />}/>
                    <Route path="/404" element={ <NotFoundPage /> } />
                    <Route path="*" element={ <Navigate to="/404" replace />} />
                </Routes>
            </main>
        </Wrapper>
    );
}

export default RootLayout;