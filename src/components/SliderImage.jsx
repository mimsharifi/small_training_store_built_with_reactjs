import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Autoplay} from "swiper/modules"
import "swiper/css/pagination"
import 'swiper/css';
// Styles
import Styles from "../Styles/slider.module.css"
// Images
import image1 from "../assets/images/image slider/Jacket Winter Coats.jpg"
import image2 from "../assets/images/image slider/jewelry.jpg"
import image3 from "../assets/images/image slider/Laptop1.jpg"
import image4 from "../assets/images/image slider/tshirt.png"
import image5 from "../assets/images/image slider/jewelry.jpg"

const ImageSlider = () => {
	return (
    <div className={Styles.container}>
    <Swiper style={{margin: '0px'}} slidesPerView={1} autoplay={{delay: 3000}} loop={true} modules={[Pagination, Autoplay]} pagination={{clickable: true}} >
    <SwiperSlide> <img src={image1} className={Styles.image}/> </SwiperSlide>
    <SwiperSlide> <img src={image2} className={Styles.image}/> </SwiperSlide>
    <SwiperSlide> <img src={image3} className={Styles.image}/> </SwiperSlide>
    <SwiperSlide> <img src={image4} className={Styles.image}/> </SwiperSlide>
    <SwiperSlide> <img src={image5} className={Styles.image}/> </SwiperSlide>
  </Swiper>
  </div>
	)
}
export default ImageSlider;
