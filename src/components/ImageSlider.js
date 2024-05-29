import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="img/gamebg.jpg" alt="This is our background image" aria-label="This is a decorative background image" className="start" />
        </div>
        <div>
          <img src="img/pic1.jpg" alt="This is our background image" aria-label="This is a decorative background image" className="start" />
        </div>
        <div>
          <img src="img/pic2.jpg" alt="This is our background image" aria-label="This is a decorative background image" className="start" />
        </div>
        <div>
          <img src="img/pic4.jpg" alt="This is our background image" aria-label="This is a decorative background image" className="start" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;


// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const images = [
//   "img/gamebg.jpg",
//   "img/pic1.jpg",
//   "img/pic2.jpg",
//   "img/pic4.jpg"
// ];

// const ImageSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((img, index) => (
//         <div key={index}>
//           <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ImageSlider;
