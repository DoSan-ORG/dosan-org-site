import {Outlet} from 'react-router-dom';
import Header from '../components/UI/Header';
import Wrapper from '../components/UI/Wrapper';

function RootLayout(){
    return (
        <Wrapper className="page-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
        </Wrapper>
    );
}

export default RootLayout;