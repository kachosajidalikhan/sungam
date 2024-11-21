import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Booking = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [room, setRoom] = useState(null);
  const nav = useNavigate();
  const params = useParams();

  

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const resp = await axios.get('/api/rooms/getrooms');
        const room = resp.data.find(room => room._id === params.roomid);
        setRoom(room);
      } catch (e) {
        console.log(e);
      }
    };

    fetchRoom();
  }, [params.roomid]);

  if (!room) {
    return <div>Loading...</div>;
  }

  const roomName = room.roomName;
  const roomPrice = room.roomPrice;
  const userId = Math.floor(Math.random() * 1000);

  const userData = async (data) => {
    data.roomName = roomName;
    data.roomPrice = roomPrice;
    data.userId = userId;
    console.log('Data sent to the backend:', data); 
  
    try {
      const response = await axios.post('/booking-detail', {
        ...data,
        checkIn: new Date(data.checkIn),
        checkOut: new Date(data.checkOut),
      });
  
      if (response.status === 200) {
        const bookingDetail = response.data.bookingDetail;
        if (bookingDetail && bookingDetail._id) {
          const bookingId = bookingDetail._id;
          console.log('Booking ID:', bookingId);
          nav(`/bookingdetail/${bookingId}`);
        } else {
          console.error('Booking detail does not contain an ID');
        }
      }
    } catch (error) {
      console.error('Error booking room:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <>
      
      <div className="container mx-auto py-10 px-4">
  <div className="text-center">
    <h6 className="text-primary uppercase text-lg font-semibold">Room Booking</h6>
    <h1 className="text-3xl font-bold mb-6">
      Book A <span className="text-primary uppercase">Luxury Room</span>
    </h1>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Images Section */}
    <div className="grid grid-cols-2 gap-4">
      <img
        className="rounded-lg w-full self-end transition-transform duration-300 hover:scale-105"
        src="/img/aaa.jpg"
        alt="Room 1"
        style={{ marginTop: "25%" }}
      />
      <img
        className="rounded-lg w-full transition-transform duration-300 hover:scale-105"
        src="/img/bbb.jpg"
        alt="Room 2"
      />
      <img
        className="rounded-lg w-full transition-transform duration-300 hover:scale-105"
        src="/img/ccc.jpg"
        alt="Room 3"
      />
      <img
        className="rounded-lg w-full transition-transform duration-300 hover:scale-105"
        src="/img/ddd.jpg"
        alt="Room 4"
      />
    </div>
    {/* Form Section */}
    <div>
      <form onSubmit={handleSubmit(userData)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              {...register("userName", { required: true })}
              type="text"
              id="name"
              className="input-field"
              placeholder="Your Name"
            />
            {errors.userName && <p className="error">Please Enter Your Name!</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="input-field"
              placeholder="Your Email"
            />
            {errors.email && <p className="error">Please Enter Your Email!</p>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cnic" className="block text-sm font-medium">
            Your CNIC
          </label>
          <input
            {...register("cnic", { required: true })}
            type="number"
            id="cnic"
            className="input-field"
            placeholder="Your CNIC"
          />
          {errors.cnic && <p className="error">Please Enter Your CNIC!</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="checkIn" className="block text-sm font-medium">
              Check In
            </label>
            <input
              {...register("checkIn", { required: true })}
              type="date"
              id="checkIn"
              className="input-field"
            />
            {errors.checkIn && <p className="error">Please Enter Check In Date!</p>}
          </div>
          <div className="form-group">
            <label htmlFor="checkOut" className="block text-sm font-medium">
              Check Out
            </label>
            <input
              {...register("checkOut", { required: true })}
              type="date"
              id="checkOut"
              className="input-field"
            />
            {errors.checkOut && <p className="error">Please Enter Check Out Date!</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="adults" className="block text-sm font-medium">
              Adults
            </label>
            <input
              {...register("adults", { required: true })}
              type="number"
              id="adults"
              className="input-field"
              placeholder="No of Adults"
            />
            {errors.adults && <p className="error">Please Enter No of Adults!</p>}
          </div>
          <div className="form-group">
            <label htmlFor="children" className="block text-sm font-medium">
              Children
            </label>
            <input
              {...register("children", { required: true })}
              type="number"
              id="children"
              className="input-field"
              placeholder="No of Children"
            />
            {errors.children && <p className="error">Please Enter No of Children!</p>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo" className="block text-sm font-medium">
            Phone No
          </label>
          <input
            {...register("phoneNo", { required: true })}
            type="number"
            id="phoneNo"
            className="input-field"
            placeholder="Your Phone No"
          />
          {errors.phoneNo && <p className="error">Please Enter Your Phone No!</p>}
        </div>
        <div className="form-group">
          <label htmlFor="specialRequests" className="block text-sm font-medium">
            Special Requests
          </label>
          <textarea
            {...register("specialRequests")}
            id="specialRequests"
            className="input-field"
            placeholder="Any special request"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="btn bg-primary text-white w-full py-3 rounded hover:bg-primary-dark"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default Booking;
