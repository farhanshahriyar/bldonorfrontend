import React from 'react';

const NgoCarousal = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide mb-0" style={{ height: '550px' }} data-bs-ride="carousel">
            <div className="carousel-inner mb-0">
                <div className="carousel-item active mb-0" data-bs-interval="3500">
                    <img src='https://www.aiub.edu/Files/Uploads/blood2.jpg' className="d-block w-100 hospital-car" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h2 className="text-start text-white">Blood Donation Bangladesh Welfare Foundation</h2>
                        <p className="text-start text-white">ব্লাড ডোনেশন বাংলাদেশ ওয়েলফেয়ার ফাউন্ডেশন এর উদ্যোগে নানামুখী উন্নয়নমূলক কার্যক্রম গ্রহণ করার লক্ষ্যে ২০১৭ সালের ৬ জুলাই ব্লাড ডোনেশন বাংলাদেশ নামে একটি অনলাইনভিত্তিক স্বেচ্ছাসেবী সংগঠন গঠিত হয়।</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger "><a href="https://bdbwf.com/" className='text-decoration-none text-white'>See more</a></button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src="https://bdrcs.org/wp-content/uploads/2021/01/getinvolve-image-3-800x373.jpg" className="d-block w-100 hospital-car" alt="..." height="500px" />
                    <div className="carousel-caption d-none d-md-block me-auto w-50 position-relative" style={{ bottom: '296px', left: '40px' }}>
                        <h1 className="text-start text-white">Blood Bank - Bangladesh Red Crescent Society</h1>
                        <p className="text-start text-white">Bangladesh Red Crescent Society was established by the President Order 26 of 1973 as an auxiliary to the Public Authority.</p>
                        <div className="d-flex justify-content-start">
                            <button className="btn btn-danger "><a href="https://bdrcs.org/" className='text-decoration-none text-white'>See more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NgoCarousal;