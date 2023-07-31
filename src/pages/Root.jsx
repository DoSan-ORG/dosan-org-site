import { useSelector } from 'react-redux';
import  { Route, Routes } from "react-router-dom";
import Header from '../components/UI/Header';
import Wrapper from '../components/UI/Wrapper';
import HomePage from './Home'
import AboutPage from './About'
import ServicesPage from './Services'
import NewsPage from './News'
import ContactUsPage from './ContactUs'

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
                    <Route path="/news" element={<NewsPage />}/>
                    <Route path="/contact-is" element={<ContactUsPage />}/>
                </Routes>
            </main>
        </Wrapper>
    );
}

export default RootLayout;