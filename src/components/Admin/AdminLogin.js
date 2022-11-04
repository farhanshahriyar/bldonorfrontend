import axios from 'axios'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import banner from '../../assets/101103-hematology1.gif'
import auth from '../../firebase.init'
import Loading from '../parts/Loading'
const AdminLogin = () => {
    const [initUser, loading] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (initUser) {
            navigate('/')
        }
    }, [initUser])
    useEffect(() => {
        if (localStorage.getItem('admin-credintial')) {
            navigate('/dashboard')
        }
    }, [])
    if (loading) {
        return <Loading />
    }
    return (
        <div style={{ minHeight: "600px" }}>

            <div style={{ minHeight: '600px' }} className="d-flex align-items-center flex-column-reverse flex-md-row p-3">
                <div className="w-100 w-md-50">
                    <h1>BlDonor</h1>
                    <p>Be the reason of someone's heartbeat</p>
                    <img src={banner} alt="" className='w-100' style={{ backgroundColor: '#EAF6F6' }} />
                </div>
                <div className={`login-container w-100 w-md-50`}>
                    <h2 className="text-center">Admin Login</h2>
                    <div>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const checkUser = async () => {
                            console.log(e.target.email.value, e.target.password.value)
                            const { data } = await axios({
                                method: 'GET',
                                url: `https://limitless-savannah-08553.herokuapp.com/admin-login?email=${e.target.email.value}&password=${e.target.password.value}`,
                            })
                            if (data.allOk) {
                                localStorage.setItem('admin-credintial', true)
                                navigate('/dashboard')
                            } else {
                                toast.error('You are not an admin or your password is incorrect')
                            }
                        }
                        checkUser()
                    }}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example1">Email address</label>
                            <input type="email" placeholder="name@mail.com" id="form2Example1" name="email" className="form-control" style={{ backgroundColor: '#fff', padding: '15px 31px' }} />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input type="password" id="form2Example2" name="password" className="form-control" placeholder="atleast 6+ characters" style={{ backgroundColor: '#fff', padding: '15px 31px' }} />
                        </div>


                        <button type="submit" className="btn btn-dark  btn-block d-block mb-4 mx-auto w-100 py-3" style={{ borderRadius: '15px' }}>Login</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AdminLogin