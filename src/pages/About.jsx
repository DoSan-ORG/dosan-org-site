import { Link } from 'react-router-dom';

function AboutPage(){
    return (
        <div>
            <section className="position-relative pt-5">
                <div className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
                    style={{backgroundImage: `url(/images/about/hero-bg.svg)`}}>
                    <div className="d-lg-none" style={{height: '960px'}}></div>
                    <div className="d-none d-lg-block" style={{height: '768px'}}></div>
                </div>

                <div className="container position-relative zindex-5 pt-5">
                    <div className="row">
                    <div className="col-lg-6">

                        <nav className="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4" aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                            <Link to="/home"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                        </nav>  

                        <h1 className="pb-2 pb-md-3">About Dosan Org</h1>
                        <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3" style={{maxWidth: '526px'}}>Welcome to DosanOrg, the award-winning
                        software company driving innovation in
                        industries. Our exceptional solutions have earned us prestigious accolades. With expertise and
                        client-centricity, we deliver tailored software that exceeds expectations. Experience the transformative
                        power of our award-winning solutions for your business.</p>
                        <div className="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                            <div className="col">
                                <h3 className="h2 mb-2">2,480</h3>
                                <p className="mb-0"><strong>Remote</strong> Sales Experts</p>
                            </div>
                            <div className="col">
                                <h3 className="h2 mb-2">760</h3>
                                <p className="mb-0"><strong>New Clients</strong> per Month</p>
                            </div>
                            <div className="col">
                                <h3 className="h2 mb-2">1,200</h3>
                                <p className="mb-0"><strong>Requests</strong> per Week</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
                        <div className="row row-cols-2 gx-3 gx-lg-4">
                        <div className="col pt-lg-5 mt-lg-1">
                            <img src="/images/about/01.jpg" className="d-block rounded-3 mb-3 mb-lg-4" alt="Image" />
                            <img src="/images/about/02.jpg" className="d-block rounded-3" alt="Image" />
                        </div>
                        <div className="col">
                            <img src="/images/about/03.jpg" className="d-block rounded-3 mb-3 mb-lg-4" alt="Image" />
                            <img src="/images/about/04.jpg" className="d-block rounded-3" alt="Image" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;