import { useState } from 'react';
import softwareDevImage from '../../assets/images/landing/software-agency-3/icons/01.svg';
import appDevImage from '../../assets/images/landing/software-agency-3/icons/02.svg';
import supportMaintenanceImage from '../../assets/images/landing/software-agency-3/icons/03.svg'
import softwareQaAndTestingImage from '../../assets/images/landing/software-agency-3/icons/04.svg';
import SolutionItem from './SolutionItem';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Solution(){
    const [solutions] = useState([
        {
            id: 1,
            title: 'Software Development', 
            description: "Specializes in custom software development. We create high-quality software solutions, leveraging the latest technologies to bring your ideas to life. With our customer-centric approach and expertise, we empower businesses to achieve digital transformation and drive success.",
            image: softwareDevImage
        },
        {
            id: 2,
            title: 'App Development', 
            description: "Turning your app ideas into reality. Our expert team creates captivating, user-friendly mobile apps for iOS and Android. From concept to launch, we deliver seamless experiences that engage your audience.",
            image: appDevImage
        },
        {
            id: 3,
            title: 'Support & Maintenance', 
            description: "Offers reliable support and maintenance services. Our dedicated team ensures your software or application runs smoothly, providing timely updates, bug fixes, and technical assistance. With proactive monitoring and prompt response, we keep your systems optimized, allowing you to focus on your core business.",
            image: supportMaintenanceImage
        },
        {
            id: 4,
            title: 'Software QA & Testing', 
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: softwareQaAndTestingImage
        }
    ]);

    return (
        <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
            <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Сustom Software Solutions</h2>
            <Swiper spaceBetween={50} slidesPerView={3}>
                { solutions.map((item) => 
                    <SwiperSlide key={item.id}>
                        <SolutionItem item={item} />
                    </SwiperSlide>
                    ) }
            </Swiper>
        </section>
    );
}

export default Solution;