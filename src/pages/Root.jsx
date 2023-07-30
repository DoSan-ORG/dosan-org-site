import {Outlet} from 'react-router-dom';
import Header from '../components/UI/Header';
import Wrapper from '../components/UI/Wrapper';
import { useSelector } from 'react-redux';

function RootLayout(){
    const theme = useSelector(state => state.theme.theme);

    return (
        <Wrapper className={`page-wrapper ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <Header />
            <main>
                <Outlet />
            </main>
        </Wrapper>
    );
}

export default RootLayout;