import Carousel from 'react-bootstrap/Carousel';
 import './Slide-3.css'; 
import slide1 from '../../../assets/Slide-3/slider-1.webp';
import slide2 from '../../../assets/Slide-3/Slider-3.webp';
import slide3 from '../../../assets/Slide-3/slider-2.webp';
import slide4 from '../../../assets/Slide-3/slide-4.webp';
import slide5 from '../../../assets/Slide-3/slide-5.webp';
import slide6 from '../../../assets/Slide-3/slide-6.webp';
import slide7 from '../../../assets/Slide-3/slide-7.webp';
import slide8 from '../../../assets/Slide-3/slide-8.webp';
import slide9 from '../../../assets/Slide-3/slide-9.webp';
import slide10 from '../../../assets/Slide-3/slide-10.webp';
import slide11 from '../../../assets/Slide-3/slide-11.webp';
import slide12 from '../../../assets/Slide-3/slide-12.webp';
import slide13 from '../../../assets/Slide-3/slide-13.webp';
import slide14 from '../../../assets/Slide-3/slide-14.webp';
import slide15 from '../../../assets/Slide-3/slide-15.webp';

const slides = [
  [slide1, slide2, slide3, slide4, slide5],
  [slide6, slide7, slide8, slide9, slide10],
  [slide11, slide12, slide13, slide14, slide15]
];

const Slide3 = () => {
    return (
        <>
            <div className="container-fluid">
                <h4 className="ms-2">LUXE GRAND REDUCTION DEALS</h4>
            </div>

            <Carousel interval={3000} pause={false} controls={true} indicators={true}>
                {slides.map((slideGroup, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-between">
                            {slideGroup.map((slide, idx) => (
                                <img
                                    key={idx}
                                    src={slide}
                                    alt={`slide${index * 5 + idx + 1}`}
                                    height="370px"
                                    className="flex-shrink-0"
                                />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};

export default Slide3;
