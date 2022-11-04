import React from 'react';
import a1 from '../../assets/a1.jpg';
import a2 from '../../assets/a2.jpg';
import a3 from '../../assets/a3.jpg';


const News = () => {
    return (
        <>
            <h1 className='text-center fw-bold mb-4'>Popular News</h1>
            <div className="mx-auto mb-5 d-flex justify-content-between flex-column flex-sm-row gap-3" style={{ width: '90%' }}>
                <div className="d-flex flex-column border p-3 shadow">
                    <img src={a1} alt="" className="w-100" />
                    <h4 className="fw-bold my-3">Man’s Best Friend and the BlDonor</h4>
                    <p>WORLD WAR I While the Bangladesh Red Cross did not use dogs during World War I, several other Red Cross societies employed dogs that greatly aided the Allied forces during the war. </p>
                    <button className="d-block mx-auto btn btn-danger">LEARN MORE</button>
                </div>
                <div className="d-flex flex-column border p-3 shadow">
                    <img src={a2} alt="" className="w-100" />
                    <h4 className="fw-bold my-3">Stop the Bleed: It’s Time to Train</h4>
                    <p>STOP THE BLEED® is one of our nation’s largest public health campaigns. Its goal is to save lives by training people across the country how to stop traumatic bleeding.</p>
                    <button className="d-block mx-auto btn btn-danger">LEARN MORE</button>
                </div>
                <div className="d-flex flex-column border p-3 shadow">
                    <img src={a3} alt="" className="w-100" />
                    <h4 className="fw-bold my-3">National Nurses Week: BlDonor Celebrates Its Nurses</h4>
                    <p>It’s National Nurses Week, a time to recognize the invaluable work Bangladesh Red Cross nurses contribute to our organization, to their communities and to the country.</p>
                    <button className="d-block mx-auto btn btn-danger">LEARN MORE</button>
                </div>
            </div>
        </>

    );

};

export default News;