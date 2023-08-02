import SolutionItem from './SolutionItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Solution(){
    const solutions = [
        {
            id: 1,
            title: 'Software Development', 
            description: "Specializes in custom software development. We create high-quality software solutions, leveraging the latest technologies to bring your ideas to life. With our customer-centric approach and expertise, we empower businesses to achieve digital transformation and drive success.",
            image: '/images/solutions/01.svg'
        },
        {
            id: 2,
            title: 'App Development', 
            description: "Turning your app ideas into reality. Our expert team creates captivating, user-friendly mobile apps for iOS and Android. From concept to launch, we deliver seamless experiences that engage your audience.",
            image: '/images/solutions/02.svg'
        },
        {
            id: 3,
            title: 'Support & Maintenance', 
            description: "Offers reliable support and maintenance services. Our dedicated team ensures your software or application runs smoothly, providing timely updates, bug fixes, and technical assistance. With proactive monitoring and prompt response, we keep your systems optimized, allowing you to focus on your core business.",
            image: '/images/solutions/03.svg'
        },
        {
            id: 4,
            title: 'Software QA & Testing', 
            description: "Your trusted partner for software QA and testing. We ensure the quality and reliability of your software through meticulous testing and analysis, delivering superior user experiences.",
            image: '/images/solutions/04.svg'
        }
    ];

    return (
        <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
            <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Сustom Software Solutions</h2>
            <Swiper 
                spaceBetween={24} 
                navigation={true} 
                modules={[Navigation]} 
                centeredSlides={false}
                centerInsufficientSlides={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    500: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}>
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