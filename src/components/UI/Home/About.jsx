import aboutImage from '../../../assets/images/landing/software-agency-1/about-img.jpg';
import clutchLightImage from '../../../assets/images/landing/software-agency-3/awards/clutch-light.png';
import clutchDarkImage from '../../../assets/images/landing/software-agency-3/awards/clutch-dark.png';
import forbesLightImage from '../../../assets/images/landing/software-agency-3/awards/forbes-light.png';
import forbesDarkImage from '../../../assets/images/landing/software-agency-3/awards/forbes-dark.png';
import awardsLightsImage from '../../../assets/images/landing/software-agency-3/awards/awwwards-light.png';
import awardsDarkImage from '../../../assets/images/landing/software-agency-3/awards/awwwards-dark.png';

function About(){
    return (
        <section className="container my-5 py-lg-5 py-md-4 py-3">
            <div className="row gy-4 py-xl-3">
                <div className="col-md-6">
                <img src={aboutImage} alt="Image" className="rounded-3" />
                </div>
                <div className="col-lg-5 col-md-6 offset-lg-1 d-flex" id="about">
                <div className="align-self-center ps-lg-0 ps-md-4">
                    <h2 className="h1 mb-lg-4 mb-3">Award-Winning Software Company</h2>
                    <p className="mb-4 pb-lg-3 fs-lg">Welcome to DosanOrg, the award-winning software company driving innovation in
                    industries. Our exceptional solutions have earned us prestigious accolades. With expertise and
                    client-centricity, we deliver tailored software that exceeds expectations. Experience the transformative
                    power of our award-winning solutions for your business.</p>
                    <div className="d-flex align-items-center ms-sm-n4 ms-n3 mb-4 pb-lg-3">
                    <div className="ms-sm-4 ms-3">
                        <img src={clutchLightImage} width="63" alt="Clutch"
                        className="d-dark-mode-none d-block" />
                        <img src={clutchDarkImage} width="63" alt="Clutch"
                        className="d-dark-mode-block d-none" />
                    </div>
                    <div className="ms-sm-4 ms-3">
                        <img src={forbesLightImage} width="72" alt="Clutch"
                        className="d-dark-mode-none d-block" />
                        <img src={forbesDarkImage} width="72" alt="Clutch"
                        className="d-dark-mode-block d-none" />
                    </div>
                    <div className="ms-sm-4 ms-3">
                        <img src={awardsLightsImage} width="37" alt="Clutch"
                        className="d-dark-mode-none d-block" />
                        <img src={awardsDarkImage} width="37" alt="Clutch"
                        className="d-dark-mode-block d-none" />
                    </div>
                    </div>
                    <a href="#" className="btn btn-lg btn-outline-primary">More about us</a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;