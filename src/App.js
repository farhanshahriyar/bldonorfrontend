import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/parts/Navbar'
import Footer from './components/parts/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Request from './components/pages/Request'
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import Donate from './components/pages/Donate'
import AdminLogin from './components/Admin/AdminLogin';
import Dashboard from './components/Admin/Dashboard';
import SingleDonation from './components/pages/SingleDonation';
import TypeDonation from './components/parts/TypeDonation';
import Donation from './components/pages/Donation';
import AddUser from './components/Admin/AddUser';
import RemoveUser from './components/Admin/RemoveUser';
import EditUser from './components/Admin/EditUser';
import CommonConcern from './components/parts/CommonConcern';
import EditInfo from './components/Admin/EditInfo';
import Transcation from './components/Admin/Transaction';
import Faq from './components/pages/Faq'


function App() {
  const { pathname } = useLocation()
  return (
    <div className={`App ${!pathname.includes('dashboard') && 'init-padding'}`}>
      <Toaster></Toaster>
      {!pathname.includes('dashboard') && <Navbar></Navbar>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/request" element={<Request></Request>}></Route>
        <Route path="/donate" element={<Donate></Donate>}></Route>
        <Route path="/donation-info/:donationId" element={<SingleDonation />}></Route>
        <Route path='/admin' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/dashboard' element={<Dashboard />}>  
        </Route>
          <Route path='/dashboard/adduser' element={<AddUser></AddUser>}></Route>
          <Route path='/dashboard/edituser' element={<EditUser></EditUser>}></Route>
          <Route path='/dashboard/removeuser' element={<RemoveUser></RemoveUser>}></Route>
          <Route path='/dashboard/editinfo/:userid'  element={<EditInfo></EditInfo>}></Route>
          <Route path='/dashboard/transaction' element={<Transcation></Transcation>}></Route>

        <Route path="/typedonation" element={<TypeDonation></TypeDonation>}></Route>
        <Route path="/commonconcern" element={<CommonConcern></CommonConcern>}></Route>
        <Route path="/typedonation" element={<TypeDonation></TypeDonation>}></Route>
        <Route path="/typedonation" element={<TypeDonation></TypeDonation>}></Route>
        <Route path="/donation" element={<Donation></Donation>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
        
      </Routes>
      {!pathname.includes('dashboard') && <Footer></Footer>}
    </div>
  );
}

export default App;
