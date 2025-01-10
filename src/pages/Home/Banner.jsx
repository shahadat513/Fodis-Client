// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="hero h-80 "
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/89sNZZQ/pexels-fotios-photos-1126728.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to Our Restaurant</h1>
                                <p className="mb-5">
                                    Experience the finest dining with our exquisite menu crafted by top chefs.
                                </p>
                                <Link to="/allFoods">
                                    <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 btn-primary">Explore All Foods</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero h-80"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/0cQcDC0/pexels-life-of-pix-67468.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to Our Restaurant</h1>
                                <p className="mb-5">
                                    Experience the finest dining with our exquisite menu crafted by top chefs.
                                </p>
                                <Link to="/allFoods">
                                    <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 btn-primary">Explore All Foods</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero h-80"
                        style={{
                            backgroundImage: "url(https://i.ibb.co.com/Sxnmt3C/pexels-elletakesphotos-2696064.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Welcome to Our Restaurant</h1>
                                <p className="mb-5">
                                    Experience the finest dining with our exquisite menu crafted by top chefs.
                                </p>
                                <Link to="/allFoods">
                                    <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 btn-primary">Explore All Foods</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default Banner;
