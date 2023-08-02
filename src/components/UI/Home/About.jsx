import { Link } from 'react-router-dom';

function About(){
    return (
        <section className="container my-5 py-lg-5 py-md-4 py-3">
            <div className="row gy-4 py-xl-3">
                <div className="col-md-6">
                <img src="/images/about-img.jpg" alt="Image" className="rounded-3" />
                </div>
                <div className="col-lg-5 col-md-6 offset-lg-1 d-flex" id="about">
                <div className="align-self-center ps-lg-0 ps-md-4">
                    <h2 className="h1 mb-lg-4 mb-3">Award-Winning Software Company</h2>
                    <p className="mb-4 pb-lg-3 fs-lg">Welcome to DosanOrg, the award-winning software company driving innovation in
                    industries. Our exceptional solutions have earned us prestigious accolades. With expertise and
                    client-centricity, we deliver tailored software that exceeds expectations. Experience the transformative
                    power of our award-winning solutions for your business.</p>
                    <Link to="/about" className="btn btn-lg btn-outline-primary">More about us</Link>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About;