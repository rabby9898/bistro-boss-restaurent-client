import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subTitle={"---------What Our Clients Say---------"}
        title={"TESTIMONIALS"}
      ></SectionTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center p-20">
                <Rating
                  style={{ maxWidth: 280 }}
                  value={review.rating}
                  readOnly
                  className="mx-auto mb-8"
                />
                <FaQuoteLeft className="text-9xl mx-auto mb-8" />
                <p className="text-black text-base my-4">{review.details}</p>
                <h1 className="text-[#CD9003] text-2xl uppercase">
                  {review.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
