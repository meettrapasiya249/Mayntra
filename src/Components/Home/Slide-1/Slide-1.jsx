import lable from '../../../assets/Slide-1/lable.webp';
import slide1 from '../../../assets/Slide-1/slide1.webp';
import slide2 from '../../../assets/Slide-1/slide2.webp';
import slide3 from '../../../assets/Slide-1/slide3.webp';
import slide4 from '../../../assets/Slide-1/slide4.webp';
import slide5 from '../../../assets/Slide-1/slide5.webp';

import Carousel from 'react-bootstrap/Carousel';
import './Slide-1.css'; 

const Slide1 = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <img src={lable} alt="" width={'1250px'} />
            </div>

            <div className="mt-4 carousel-wrapper ">
                <Carousel interval={2000} pause={false} controls={false} indicators={true}>
                    <Carousel.Item>
                        <img src={slide1} alt="slide1" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide2} alt="slide2" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide3} alt="slide3" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide4} alt="slide4" className="d-block w-100" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slide5} alt="slide5" className="d-block w-100" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Slide1;
