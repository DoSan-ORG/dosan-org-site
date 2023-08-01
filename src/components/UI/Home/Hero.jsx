import { useSelector } from 'react-redux';
import heroImage from '../../../assets/images/hero-bg.png';

function Hero(){
    const theme = useSelector(state => state.theme.theme);
    
    return (
        <section className={`position-relative d-flex align-items-center min-vh-100 py-5 overflow-hidden ${theme === 'dark' ? 'bg-dark' : ''}`}>
            <span className={`position-absolute top-0 start-0 d-none w-100 h-100 bg-secondary opacity-75 ${theme === 'dark' ? 'd-dark-mode-block': ''}`}></span>
            <div className={`container position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3`}>
                <div className="row gy-5">
                <div className="col-xl-5 col-lg-6">
                    <div className="position-relative zindex-5 text-lg-start text-center">
                    <h1 className="display-2 mb-4 pb-lg-3 pb-md-2">Top <span className="text-primary">software</span> engineering
                        company</h1>
                    <p className="mb-4 pb-lg-3 pb-md-2">
                        <span className={`me-2 ${theme === 'dark' ? 'text-light': ''}`}>We are the Top Software solutions</span>
                    </p>
                    <a href="/contact-us" className="btn btn-lg btn-primary">Start your project</a>
                    </div>
                </div>
                <div className="col-lg-6 offset-xl-1">
                    <div className="position-relative ms-xl-0 ms-lg-4">
                    <div className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1"
                        style={{width: '125%', maxWidth: '49.75rem'}}>
                        <div className="p-md-0 p-5">
                        <img src={heroImage} alt="Shape" className="hero-animation-spin p-md-0 p-5" />
                        </div>
                    </div>
                    <div className="position-relative row row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                        <div className="col">
                        <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                            <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: '176px', backdropFilter: blur('6px')}}>
                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                <span className={`hero-animation-fade ${theme === 'dark' ? 'text-white': ''}`}>I need AI engineers</span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: '176px', backdropFilter: blur('6px')}}>
                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                <span className={`hero-animation-fade hero-animation-delay-2 ${theme === 'dark' ? 'text-white' : ''}`}>We are looking for Shopify
                                Experts</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col mt-sm-5 mt-2 pt-sm-5">
                        <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                            <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: '176px', backdropFilter: blur('6px')}}>
                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                <span className={`hero-animation-fade hero-animation-delay-1 ${theme === 'dark' ? 'text-white': ''}`}>I need MVP for
                                startup</span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: '176px', backdropFilter: blur('6px')}}>
                            <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                                <span className={`hero-animation-fade hero-animation-delay-3 ${theme === 'dark' ? 'text-white': ''}`}>I need web
                                development</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;