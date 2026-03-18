import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import AboutUs from './Pages/AboutUs'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ServicesPage from './Pages/ServicesPage'
import CareerPage from './Pages/CareerPage'
import Management from './Pages/Management'
import TradeEnquiryForm from './Pages/TradeEnquiryForm'
import EQuotationForm from './Pages/EQuotationForm'
import EAuctionForm from './Pages/EAuctionForm'
import TenderContractPage from './Pages/TenderContractPage'
import CircularPage from './Pages/CircularPage'
import BlogPage from './Pages/BlogPage'
import AppointmentPage from './Pages/AppointmentPage'
import NoticeBoardPage from './Pages/NoticeBoardPage'
import MediaGallery from './Pages/MediaGallery'
import AssociatesMap from './Pages/AssociatesMap'
import ContactPage from './Pages/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/about' element={<AboutUs/>}/>
  <Route path='/services' element={< ServicesPage/>}/>
  <Route path='/carrer' element={< CareerPage/>}/>
  <Route path='/our-chamber-management' element={< Management/>}/>
  <Route path='/trade-enquiry-(e-form)' element={< TradeEnquiryForm/>}/>
  <Route path='/e-quotation-(e-form)' element={< EQuotationForm/>}/>
  <Route path='/e-auction-(e-form)' element={< EAuctionForm/>}/>
  <Route path='/tender-&-contract' element={< TenderContractPage/>}/>
  <Route path='/circular' element={< CircularPage/>}/>
  <Route path='/blog' element={< BlogPage/>}/>
  <Route path='/visit-with-appointment-(e-form)' element={< AppointmentPage/>}/>
  <Route path='/notice-board' element={< NoticeBoardPage/>}/>
  <Route path='/media-gallery' element={< MediaGallery/>}/>
  <Route path='/our-textile-associates-(india-map)' element={< AssociatesMap/>}/>
  <Route path='/contact' element={< ContactPage/>}/>
</Routes>
<Footer/>
</BrowserRouter>

    </>
  )
}

export default App
