import ServiceItem from '../components/UI/ServiceItem';
import { Link } from 'react-router-dom';

function ServicesPage() {
    const services = [
        {
            id: 1,
            title: 'Custom Software Development',
            description: "Specializes in custom software development. We create high-quality software solutions, leveraging the latest technologies to bring your ideas to life. With our customer-centric approach and expertise, we empower businesses to achieve digital transformation and drive success.",
            image: '/images/services/cms.svg'
        },
        {
            id: 2,
            title: 'Software Integration',
            description: "Turning your app ideas into reality. Our expert team creates captivating, user-friendly mobile apps for iOS and Android. From concept to launch, we deliver seamless experiences that engage your audience.",
            image: '/images/services/rocket.svg'
        },
        {
            id: 3,
            title: 'Mobile App Development',
            description: "Offers reliable support and maintenance services. Our dedicated team ensures your software or application runs smoothly, providing timely updates, bug fixes, and technical assistance. With proactive monitoring and prompt response, we keep your systems optimized, allowing you to focus on your core business.",
            image: '/images/services/mobile-app.svg'
        },
        {
            id: 4,
            title: 'Software QA & Testing',
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: '/images/services/web-search.svg'
        },
        {
            id: 5,
            title: 'Project Management',
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: '/images/services/timer.svg'
        },
        {
            id: 6,
            title: 'Business Analytics',
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: '/images/services/analytics.svg'
        }
    ];
    return (
        <div>
            <div className="bg-secondary pt-5" style={{ paddingbottom: '228px' }}>
                <nav className="container pt-5 pb-4 mb-lg-2" aria-label="breadcrumb">
                    <ol className="breadcrumb pt-lg-3 mb-0">
                        <li className="breadcrumb-item">
                            <Link to="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Services</li>
                    </ol>
                </nav>
                <section className="container pb-2 pb-md-4 pb-lg-5 mb-3">
                    <h1 className="pb-4">Services</h1>
                    <div className="row row-cols-1 row-cols-md-2">
                        {
                            services.map((item) => {
                                return (
                                    <div className="col py-4 my-2 my-sm-3" key={item.id} >
                                        <ServiceItem item={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServicesPage;