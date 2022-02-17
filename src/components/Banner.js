import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_041021_Bangalore.jpg"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekendallcities_460_091021.jpg"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_fv_m_Navratri_460_81021.jpg"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_wintercare_460.jpg"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_BreakfastCorner_460.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
