import shope from '../../../assets/Shope/shope.webp';
import './Shope.css';

import s1 from '../../../assets/Shope/s1.webp';
import s2 from '../../../assets/Shope/s2.webp';
import s3 from '../../../assets/Shope/s3.webp';
import s4 from '../../../assets/Shope/s4.webp';
import s5 from '../../../assets/Shope/s5.webp';
import s6 from '../../../assets/Shope/s6.webp';
import s7 from '../../../assets/Shope/s7.webp';
import s8 from '../../../assets/Shope/s8.webp';
import s9 from '../../../assets/Shope/s9.webp';
import s10 from '../../../assets/Shope/s10.webp';
import s11 from '../../../assets/Shope/s11.webp';
import s12 from '../../../assets/Shope/s12.webp';
import s13 from '../../../assets/Shope/s13.webp';
import s14 from '../../../assets/Shope/s14.webp';
import s15 from '../../../assets/Shope/s15.webp';
import s16 from '../../../assets/Shope/s16.webp';
import s17 from '../../../assets/Shope/s17.webp';
import s18 from '../../../assets/Shope/s18.webp';
import s19 from '../../../assets/Shope/s19.webp';
import s20 from '../../../assets/Shope/s20.webp';
import s21 from '../../../assets/Shope/s21.webp';
import s22 from '../../../assets/Shope/s22.webp';
import s23 from '../../../assets/Shope/s23.webp';
import s24 from '../../../assets/Shope/s24.webp';
import s25 from '../../../assets/Shope/s25.webp';
import s26 from '../../../assets/Shope/s26.webp';
import s27 from '../../../assets/Shope/s27.webp';
import s28 from '../../../assets/Shope/s28.webp';
import s29 from '../../../assets/Shope/s29.webp';
import s30 from '../../../assets/Shope/s30.webp';
import s31 from '../../../assets/Shope/s31.webp';
import s32 from '../../../assets/Shope/s32.webp';
import s33 from '../../../assets/Shope/s33.webp';

const Shope = () => {

    const images = [
        s1, s2, s3, s4, s5, s6,
        s7, s8, s9, s10, s11, s12,
        s13, s14, s15, s16, s17, s18,
        s19, s20, s21, s22, s23, s24,
        s25, s26, s27, s28, s29, s30,
        s31, s32, s33
    ];

    return (
        <>
            <div className="shope">
                <img src={shope} width="100%" alt="" />
            </div>

            <div className="shope-grid-wrapper">
    <div className="shope-grid">
        {images.map((img, i) => (
            <img key={i} src={img} alt={`img-${i}`} />
        ))}
    </div>
</div>


        </>
    );
};

export default Shope;
