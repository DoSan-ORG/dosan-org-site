
import csd from '../assets/images/services/icons/cms.svg';
import rocket from '../assets/images/services/icons/rocket.svg';
import ma from '../assets/images/services/icons/mobile-app.svg';
import analytics from '../assets/images/services/icons/analytics.svg';
import ws from '../assets/images/services/icons/web-search.svg';
import timer from '../assets/images/services/icons/timer.svg';
import ServiceItem from '../components/UI/ServiceItem';

function ServicesPage() {
    const services = [
        {
            id: 1,
            title: 'Custom Software Development',
            description: "Specializes in custom software development. We create high-quality software solutions, leveraging the latest technologies to bring your ideas to life. With our customer-centric approach and expertise, we empower businesses to achieve digital transformation and drive success.",
            image: csd
        },
        {
            id: 2,
            title: 'Software Integration',
            description: "Turning your app ideas into reality. Our expert team creates captivating, user-friendly mobile apps for iOS and Android. From concept to launch, we deliver seamless experiences that engage your audience.",
            image: rocket
        },
        {
            id: 3,
            title: 'Mobile App Development',
            description: "Offers reliable support and maintenance services. Our dedicated team ensures your software or application runs smoothly, providing timely updates, bug fixes, and technical assistance. With proactive monitoring and prompt response, we keep your systems optimized, allowing you to focus on your core business.",
            image: ma
        },
        {
            id: 4,
            title: 'Software QA & Testing',
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: ws
        },
        {
            id: 5,
            title: 'Project Management',
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: timer
        },
        {
            id: 6,
            title: 'Business Analytics',
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: analytics
        }
    ];
    return (
        <div>
            <div className="bg-secondary pt-5" style={{ paddingbottom: '228px' }}>
                <nav className="container pt-5 pb-4 mb-lg-2" aria-label="breadcrumb">
                    <ol className="breadcrumb pt-lg-3 mb-0">
                        <li className="breadcrumb-item">
                            <a href="index.html"><i className="bx bx-home-alt fs-lg me-1"></i>Home</a>
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