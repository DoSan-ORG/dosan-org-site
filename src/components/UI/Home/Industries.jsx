import industry1Image from '../../../assets/images/landing/software-agency-3/industries/01.jpg';
import industry2Image from '../../../assets/images/landing/software-agency-3/industries/02.jpg';
import industry3Image from '../../../assets/images/landing/software-agency-3/industries/03.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Industries(){
    const industries = [
        {
            id: 1,
            title: 'Finance and Insurance',
            description: 'Your trusted partner for comprehensive finance and insurance solutions. We specialize in developing ' +
            'cutting-edge software products tailored to the unique needs of the finance and insurance industry.' +
            'With our expertise and innovative approach, we empower businesses to streamline operations, enhance' + 
            'security, and achieve their financial goals.',
            image: industry1Image
        },
        {
            id: 2,
            title: 'Startup and technology',
            description: 'Your go-to partner for innovative startup and technology solutions. We specialize in developing ' +
            'cutting-edge software products and services that help startups thrive in the fast-paced digital' +
            'landscape. With our expertise and forward-thinking approach, we empower startups to disrupt markets,' +
            'scale their operations, and achieve remarkable success.',
            image: industry2Image
        },
        {
            id: 3,
            title: 'E-commerce',
            description: 'Your trusted partner for comprehensive e-commerce solutions. We specialize in developing powerful' +
            'software products and services that enable businesses to succeed in the competitive world of online' +
            'retail. With our expertise and innovative approach, we help businesses establish a robust online' +
            'presence, drive sales, and deliver exceptional customer experiences.',
            image: industry3Image
        },

    ];
    return (
        <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
            <h2 className="h1 mb-4 text-center d-lg-none">Industries We Serve</h2>
            <div className="row gy-md-5 gy-4 mb-xl-3">
                <div className="col-xl-12 col-lg-5 d-flex flex-column order-2 order-lg-1">
                    <h2 className="h1 mb-4 pb-3 pt-2 d-none d-lg-block">Industries We Serve</h2>
                    <Swiper 
                        spaceBetween={24} 
                        loop={true} 
                        autoHeight={true} 
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
                        { industries.map((item) => 
                            <SwiperSlide key={item.id}>
                                <div className="card h-100">
                                    <div className="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                                        <img src={item.image} alt={item.title} className="d-block mb-3 mx-auto" />
                                        <h3 className="h5 mb-lg-4 mb-3">{item.title}</h3>
                                        <p className='sentence'>{item.description}</p>
                                    </div>    
                                </div>
                            </SwiperSlide>
                            ) }
                    </Swiper> 
                </div>
            </div>
        </section>
    )
}

export default Industries;