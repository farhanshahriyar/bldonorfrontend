import React from 'react';


const HospitalCarousal = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide mb-0" style={{ height: '550px' }} data-bs-ride="carousel">
            <div className="carousel-inner mb-0">
                <div className="carousel-item active mb-0" data-bs-interval="3500">
                    <img src='https://expertchikitsa.com/wp-content/uploads/2019/09/United-Hospital-2.jpg' className="d-block w-100 hospital-car" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">United Hospital</h1>
                        <p className="text-start text-white">United Hospital Limited is a private hospital in Gulshan Thana, Dhaka, Bangladesh. Mohammad Faizur Rahman is the Managing Director and CEO of the hospital.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger "><a href="https://www.uhlbd.com/" className='text-decoration-none text-white'>See more</a></button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/4802954_New%20Project.jpg" className="d-block w-100 hospital-car" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">CMH Hospital</h1>
                        <p className="text-start text-white">Combined Military Hospital (Dhaka) or CMH is a hospital located in Dhaka Cantonment. It is part of the Combined Military Hospital chain situated in all cantonments of Bangladesh.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger "><a href="https://www.army.mil.bd/" className='text-decoration-none text-white'>See more</a></button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src='https://lh5.googleusercontent.com/p/AF1QipOivlAaNBQDgI9_ht9k1v__yxb2_KCE1poT0TXN=w1200-h630-p-k-no-nu' className="d-block w-100 hospital-car" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">Central Hospital ltd</h1>
                        <p className="text-start text-white">Central Hospital Ltd. is owned by a group of dedicated souls for Healthcare. The Group’s strength includes its commitment to Quality, leasing edge technology and infrastructure for doctor’s and staff’s continuing professional development.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger "><a href="https://centralhospitalltdbd.com/" className='text-decoration-none text-white'>See more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalCarousal;