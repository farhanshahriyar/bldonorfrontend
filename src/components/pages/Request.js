import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleRequest from '../parts/SingleRequest'

const Request = () => {
    const areas = ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Satkhira', 'Narail', 'Meherpur', 'Magura', 'Kushtia', 'Khulna', 'Jhenaidah', 'Jashore', 'Chuadanga', 'Bagerhat', 'Sylhet', 'Sunamganj', 'Maulvibazar', 'Habiganj', 'Rangamati', 'Noakhali', 'Lakshmipur', 'Khagrachari', 'Feni', "Cox's Bazar", 'Cumilla', 'Chattogram', 'Chandpur', 'Brahmanbaria', 'Bandarban', 'Pirojpur', 'Patuakhali', 'Jhalokati', 'Bhola', 'Barishal', 'Barguna', 'Thakurgaon', 'Rangpur', 'Panchagarh', 'Nilphamari', 'Lalmonirhat', 'Kurigram', 'Gaibandha', 'Dinajpur', 'Sirajgonj', 'Rajshahi', 'Pabna', 'Nawabganj', 'Natore', 'Naogaon', 'Joypurhat', 'Bogura', 'Tangail', 'Sherpur', 'Shariatpur', 'Rajbari', 'Netrokona', 'Narsingdi', 'Kishoreganj', 'Narayanganj', 'Mymensingh', 'Munshiganj', 'Manikganj', 'Madaripur']
    const [request, setRequest] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getAllRequest = async () => {
            const { data } = await axios.get('https://limitless-savannah-08553.herokuapp.com/request')
            setRequest(data.reverse())
            setLoading(false)
        }
        getAllRequest()
    }, [])
    const handleFilter = async (e) => {
        e.preventDefault()
        setLoading(true)
        setRequest([])
        const { data } = await axios.get(`https://limitless-savannah-08553.herokuapp.com/request?blood=${e.target.blood.value}&area=${e.target.area.value}`)
        console.log(data);
        setRequest(data)
        e.target.reset()
        setLoading(false)
    }

    return (
        <div style={{ minHeight: "600px" }}>
            <div className='container mt-3'>
                <form onSubmit={handleFilter}>
                    <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>
                        <div className="form-outline col-md-3">
                            <select defaultValue="" required className="form-select position-relative" name='area' style={{ top: '3px' }}>
                                <option value="" disabled>Choose Area</option>
                                <option value="all">All</option>
                                {areas.map(area => <option value={area}>{area}</option>)}
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <select className='form-select mt-1' defaultValue={``} name="blood" required>
                                <option value="" disabled>Choose blood group</option>
                                <option value='all'>All</option>
                                <option value='APlus'>A+</option>
                                <option value='AMinus'>A-</option>
                                <option value='BPlus'>B+</option>
                                <option value='BMinus'>B-</option>
                                <option value='OPlus'>O+</option>
                                <option value='0Minus'>O-</option>
                                <option value='ABPlus'>AB+</option>
                                <option value='ABMinus'>AB-</option>
                            </select>
                        </div>
                        <div className='col-md-3 w-20'>
                            <button className='btn w-100 mt-1 btn btn-dark' type='submit'>FILTER</button>
                        </div>
                    </div>
                </form>
            </div>
            {loading && <div className="d-flex justify-content-center my-3">
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>}
            <h1 className="text-center">{`${request.length} ${request.length > 1 ? 'donations' : 'donation'}`} Available</h1>
            {
                request.map(req => <SingleRequest
                    req={req}
                    key={req._id}
                ></SingleRequest>)
            }
        </div >
    );
};

export default Request;