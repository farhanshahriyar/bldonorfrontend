import React from 'react';
import patient from '../../assets/patient.jpeg'
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
    return (<>
        <div id="carouselExampleDark" className="carousel carousel-dark slide mb-0" style={{ height: '550px' }} data-bs-ride="carousel">
            <div className="carousel-inner mb-0">
                <div className="carousel-item active mb-0" data-bs-interval="3500">
                    <img src='https://media.istockphoto.com/photos/blood-donation-concept-picture-id1220217893?k=20&m=1220217893&s=612x612&w=0&h=K6Tayrc1JCEmhGkfaBnEL_e3yOjGzbTFsmowslXwoHM=' className="d-block w-100" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">Donate bloods to save life</h1>
                        <p className="text-start text-white">Bldonor is a real-time free platform to help blood searchers connect voluntary blood donors around Bangladesh.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger"><Link to="/donate" className="text-decoration-none text-white">Donate Now !</Link></button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src={patient} className="d-block w-100" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">You Can Make
a Difference</h1>
                        <p className="text-start text-white">Your financial gift helps people
affected by disasters big and small.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger"><Link to="/request" className="text-decoration-none text-white">Find Blood !</Link></button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src='https://media.istockphoto.com/photos/blood-donation-concept-picture-id1220217893?k=20&m=1220217893&s=612x612&w=0&h=K6Tayrc1JCEmhGkfaBnEL_e3yOjGzbTFsmowslXwoHM=' className="d-block w-100" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">Donate bloods to save life</h1>
                        <p className="text-start text-white">Bldonor is a real-time free platform to help blood searchers connect voluntary blood donors around Bangladesh.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger"><Link to="/about" className="text-decoration-none text-white">Contact Now !</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Banner;