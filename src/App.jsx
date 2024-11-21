import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Frontend/Header/header';
import Home from './Frontend/Home/home';
import Footer from './Frontend/Footer/footer';
import RoomsSection from './Frontend/RoomSection/roomsection';
import RestaurantMenu from './Frontend/MenuSection/menusection';
import RoomDetail from './Frontend/RoomSection/RoomDetail';
import BookingPage from './Frontend/BookingPage/bookingpage';
import PaymentPage from './Frontend/PaymentPage/paymentpage';
import Services from './Frontend/Services/services';
import Aboutsection from './Frontend/AboutSection/aboutsection';
import ContactUs from './Frontend/Contact/contact';
import Gallery from './Frontend/Gallery/gallery';
import EventsSection from './Frontend/Events/events';
import EventsDetail from './Frontend/Events/eventsdetail';
import AdminPanel from "../Dashboard/AdminPanel"

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<RestaurantMenu />} />
      <Route path='/rooms' element={<RoomsSection />} />
      <Route path='/roomdetail' element={<RoomDetail />} />
      <Route path='/bookingpage' element={<BookingPage />} />
      <Route path='/paymentpage' element={<PaymentPage />} />
      <Route path='/services' element={<Services />} />
      <Route path='/aboutus' element={<Aboutsection />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/events' element={<EventsSection />} />
      <Route path='/eventsdetail' element={<EventsDetail />} />
      <Route path='/adminpanel' element={<AdminPanel />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;