import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./roombooking.css";




const BookingDetail = () => {
  let [BookingDetail, setBookingDetail] = useState([])
  let nav = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const userCnic = BookingDetail.cnic;
  const NoOfStay = BookingDetail.numberOfDays;
  const totalCost = BookingDetail.totalPrice;
  const roomName = BookingDetail.roomName;
  const roomNo = BookingDetail.roomNo;
  const DateCheckIn = new Date(BookingDetail.checkIn);
  const DateCheckOut = new Date(BookingDetail.checkOut);
  const checkIn = DateCheckIn.toLocaleDateString();
  const checkOut = DateCheckOut.toLocaleDateString();
  const userId = BookingDetail.userId;

  const bookingData = async (data) => {
    const paymentStatus = 'Pending';
    const bookingsdata = new FormData();
    bookingsdata.append('userName', data.userName);
    bookingsdata.append('email', data.email);
    bookingsdata.append('phoneNo', data.phoneNo);
    bookingsdata.append('country', data.country);
    bookingsdata.append('city', data.city);
    bookingsdata.append('paymentMethod', data.paymentMethod);
    bookingsdata.append('accountHolderName', data.accountHolderName);
    bookingsdata.append('accountNumber', data.accountNumber);
    bookingsdata.append('userCnic', data.userCnic = userCnic );
    bookingsdata.append('NoOfStay', data.NoOfStay = NoOfStay);
    bookingsdata.append('totalCost', data.totalCost = totalCost);
    bookingsdata.append('roomName', data.roomName = roomName);
    bookingsdata.append('roomNo', data.roomNo = roomNo);
    bookingsdata.append('userId', data.userId = userId);
    bookingsdata.append('paymentStatus', data.paymentStatus = paymentStatus);
    bookingsdata.append('checkIn', data.checkIn = checkIn);
    bookingsdata.append('checkOut', data.checkOut = checkOut);
    if (data.transactionSlip[0]) { // Ensure there's a file
      bookingsdata.append('transactionSlip', data.transactionSlip[0]);
    } else {
      console.error('No transaction slip selected');
      return;
    }
  

    console.log('Data sent to the backend:', bookingsdata); 
  
    try {
      const response = await axios.post('/checkout',bookingsdata);
  
      if (response.status === 200) {  
          nav('/bookingsuccess');
      }
    } catch (error) {
      console.error('Error booking detail:', error.response ? error.response.data : error.message);
    }
  };






  const { bookingId } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {

        const resp = await axios.get('/bookingdetails');
        const foundBooking = resp.data.find(booking => booking._id === bookingId);

        if (foundBooking) {
          setBookingDetail(foundBooking);
        } else {
          console.error('Booking not found');
        }
      } catch (e) {
        console.error('Error fetching booking details:', e);

      }
    };

    if (bookingId) {
      fetchRoom();
    }
  }, [bookingId]);

  return <>
   

   <div className="container mx-auto px-4">
  <div className="py-5 text-center">
    <h2 className="text-2xl font-semibold">Terms & Condition For Checkout</h2>
    <p className="text-lg text-gray-600">
      30% Pay at the time of Booking Online and remaining 70% Pay when you are Arrival At the hotel.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-1">
      <h4 className="flex justify-between items-center text-lg font-medium text-gray-700 mb-3">
        <span>Your cart</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">3</span>
      </h4>
      <ul className="space-y-3">
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded">
          <div>
            <h6 className="font-medium">Room Name</h6>
          </div>
          <span className="text-gray-600">{BookingDetail.roomName}</span>
        </li>
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded">
          <div>
            <h6 className="font-medium">Room Price</h6>
          </div>
          <span className="text-gray-600">Rs.{BookingDetail.roomPrice}/Night</span>
        </li>
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded">
          <div>
            <h6 className="font-medium">Check In</h6>
          </div>
          <span className="text-gray-600">{checkIn}</span>
        </li>
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded">
          <div>
            <h6 className="font-medium">Check Out</h6>
          </div>
          <span className="text-gray-600">{checkOut}</span>
        </li>
        <li className="flex justify-between items-center bg-gray-200 p-4 rounded text-green-600">
          <div>
            <h6 className="font-medium">No Of Stay</h6>
          </div>
          <span>{BookingDetail.numberOfDays}</span>
        </li>
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded">
          <span>Total Amount (PKR)</span>
          <strong>{BookingDetail.totalPrice}</strong>
        </li>
      </ul>
    </div>

    <div className="md:col-span-2">
      <h4 className="text-lg font-medium mb-4">Billing address</h4>
      <form onSubmit={handleSubmit(bookingData)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="font-semibold">First Name</label>
            <input
              {...register("userName", { required: true })}
              type="text"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="Your Name"
            />
            {errors.userName && <div className="text-red-600 mt-1">Please Enter Your Name!</div>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="Your Email"
            />
            {errors.email && <div className="text-red-600 mt-1">Please Enter Your Email!</div>}
          </div>
          <div>
            <label className="font-semibold">Phone No</label>
            <input
              {...register("phoneNo", { required: true })}
              type="number"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="Your Phone No"
            />
            {errors.phoneNo && <div className="text-red-600 mt-1">Please Enter Your Phone No!</div>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Country</label>
            <input
              {...register("country", { required: true })}
              type="text"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="Country"
            />
            {errors.country && <div className="text-red-600 mt-1">Please Enter Your Country!</div>}
          </div>
          <div>
            <label className="font-semibold">City</label>
            <input
              {...register("city", { required: true })}
              type="text"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="City"
            />
            {errors.city && <div className="text-red-600 mt-1">Please Enter Your City!</div>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Payment Method</label>
          <div>
            <input
              {...register("paymentMethod", { required: true })}
              type="radio"
              value="EasyPaisa"
              id="EasyPaisa"
              className="mr-2"
            />
            <label htmlFor="EasyPaisa">EasyPaisa</label>
          </div>
          <div>
            <input
              {...register("paymentMethod", { required: true })}
              type="radio"
              value="JazzCash"
              id="JazzCash"
              className="mr-2"
            />
            <label htmlFor="JazzCash">Jazz Cash</label>
          </div>
          <div>
            <input
              {...register("paymentMethod", { required: true })}
              type="radio"
              value="Bank"
              id="Bank"
              className="mr-2"
            />
            <label htmlFor="Bank">Bank</label>
          </div>
          {errors.paymentMethod && <div className="text-red-600">Please select a payment method!</div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Account Holder Name</label>
            <input
              {...register("accountHolderName", { required: true })}
              type="text"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="Example: John Alex"
            />
            <small className="text-gray-500">Full name as displayed on account</small>
            {errors.accountHolderName && <div className="text-red-600 mt-1">Please Enter Account Holder Name!</div>}
          </div>
          <div>
            <label className="font-semibold">Account Number</label>
            <input
              {...register("accountNumber", { required: true })}
              type="number"
              className="block w-full border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
              placeholder="Example: 11223344"
            />
            {errors.accountNumber && <div className="text-red-600 mt-1">Please Enter Your Account Number!</div>}
          </div>
        </div>

        <div>
          <label className="font-semibold">Upload Transaction Slip</label>
          <input
            {...register("transactionSlip", { required: true })}
            type="file"
            className="block w-full border-gray-300 rounded p-2"
          />
          {errors.transactionSlip && <div className="text-red-600 mt-1">Please Upload Transaction Slip!</div>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Continue to Checkout
        </button>
      </form>
    </div>
  </div>
</div>







  </>
}

export default BookingDetail;