import React from 'react';
import Banner from '../parts/Banner';
import image1 from '../../assets/image-1.png'
import image2 from '../../assets/image-2.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.png'
import image6 from '../../assets/image-6.jpg'
import Article from '../parts/Article';
import { Link } from 'react-router-dom';
import News from '../parts/News';
import HospitalCarousal from './HospitalCarousal';
import NgoCarousal from './NgoCarousal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Article />
            <div className="banner-next d-flex align-items-center mb-5">
                <div className="ps-5">
                    <h3 className="text-white mb-3">Patients are counting on you now !</h3>
                    <h5 className='text-white mb-3'>Donate blood can save a peoples life. Don't delay. <Link to="/donate" className="text-white">Donate Now !</Link>
                    </h5>
                </div>
            </div>
            <h3 className="text-center mb-4 fw-bold">Top Hospital List</h3>
            <HospitalCarousal />









            <h3 className="text-center mb-4 fw-bold">Top NGO List</h3>
            <NgoCarousal />

            <News />
        </div>
    );
};

export default Home;