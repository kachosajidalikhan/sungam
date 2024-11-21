// import RoomAvailable from "../roomAvailable/roomAvailable";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import PaymentForm from "./paymentform";

const PaymentPage = () => {
    let [BookingDetail, setBookingDetail] = useState([]);
    let nav = useNavigate();
    //   let currentUser = useSelector((store) => store.userSection.currentUser);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePaymentClick = () => {
        setIsModalOpen(true);
    };

    //   const userCnic = BookingDetail.cnic;
    //   const NoOfStay = BookingDetail.numberOfDays;
    //   const totalCost = BookingDetail.totalPrice;
    //   const roomName = BookingDetail.roomName;
    //   const roomNo = BookingDetail.roomNo;
    //   const DateCheckIn = new Date(BookingDetail.checkIn);
    //   const DateCheckOut = new Date(BookingDetail.checkOut);
    //   const checkIn = DateCheckIn.toLocaleDateString();
    //   const checkOut = DateCheckOut.toLocaleDateString();
    //   const userId = currentUser.id;

    const bookingData = ""
    //   const bookingData = async (data) => {
    //     const paymentStatus = "Pending";
    //     const bookingsdata = new FormData();
    //     bookingsdata.append("userName", data.userName);
    //     bookingsdata.append("email", data.email);
    //     bookingsdata.append("phoneNo", data.phoneNo);
    //     bookingsdata.append("userId", (data.userId = userId));
    //     bookingsdata.append("country", data.country);
    //     bookingsdata.append("city", data.city);
    //     bookingsdata.append("paymentMethod", data.paymentMethod);
    //     bookingsdata.append("accountHolderName", data.accountHolderName);
    //     bookingsdata.append("accountNumber", data.accountNumber);
    //     bookingsdata.append("userCnic", (data.userCnic = userCnic));
    //     bookingsdata.append("NoOfStay", (data.NoOfStay = NoOfStay));
    //     bookingsdata.append("roomNo", (data.roomNo = roomNo));
    //     bookingsdata.append("paymentStatus", (data.paymentStatus = paymentStatus));
    //     bookingsdata.append("totalCost", (data.totalCost = totalCost));
    //     bookingsdata.append("roomName", (data.roomName = roomName));
    //     bookingsdata.append("checkIn", (data.checkIn = checkIn));
    //     bookingsdata.append("checkOut", (data.checkOut = checkOut));
    //     if (data.transactionSlip[0]) {
    //       bookingsdata.append("transactionSlip", data.transactionSlip[0]);
    //     } else {
    //       console.error("No transaction slip selected");
    //       return;
    //     }

    //     try {
    //       const response = await axios.post("/checkout", bookingsdata);

    //       if (response.status === 200) {
    //         nav("/bookingsuccess");
    //       }
    //     } catch (error) {
    //       console.error("Error booking detail:", error.response ? error.response.data : error.message);
    //     }
    //   };

    //   const { bookingId } = useParams();

    //   useEffect(() => {
    //     const fetchRoom = async () => {
    //       try {
    //         const resp = await axios.get("/bookingdetails");
    //         const foundBooking = resp.data.find((booking) => booking._id === bookingId);

    //         if (foundBooking) {
    //           setBookingDetail(foundBooking);
    //         } else {
    //           console.error("Booking not found");
    //         }
    //       } catch (e) {
    //         console.error("Error fetching booking details:", e);
    //       }
    //     };

    //     if (bookingId) {
    //       fetchRoom();
    //     }
    //   }, [bookingId]);

    return (
        <>
            <div>
                <div className=" bg-opacity-50 py-10">
                    <div className="text-center text-white">
                        <h1 className="text-3xl font-bold mb-3">Booking Details</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center py-5">
                    <h2 className="text-xl font-semibold">Terms & Conditions For Checkout</h2>
                    <p className="text-gray-600">
                        30% Pay at the time of Booking Online and remaining 70% Pay when you arrive at the hotel.
                    </p>
                </div>

                <div className="w-full flex justify-between  flex-col md:flex-row gap-6">
                    <div className="shadow p-4 md:col-span-8 order-first md:order-none">
                        <h4 className="mb-3 text-lg font-semibold">Billing address</h4>
                        <form
                            onSubmit={handleSubmit(bookingData)}
                            className="checkoutform needs-validation"
                            noValidate
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <div >
                                    <label className="font-medium text-black block mb-1">First name</label>
                                    <input
                                        {...register("userName", { required: true })}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                    {errors.userName && (
                                        <div className="text-red-500 text-sm mt-1">Please Enter Your Name!</div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-black font-medium block mb-1">Email</label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                    {errors.email && (
                                        <div className="text-red-500 text-sm mt-1">Please Enter Your Email!</div>
                                    )}
                                </div>
                                <div>
                                    <label className="text-black font-medium block mb-1">Phone No</label>
                                    <input
                                        {...register("phoneNo", { required: true })}
                                        type="number"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        id="phone"
                                        placeholder="Your Phone No"
                                    />
                                    {errors.phoneNo && (
                                        <div className="text-red-500 text-sm mt-1">Please Enter Your Phone No!</div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-black font-medium block mb-1">Country</label>
                                    <input
                                        {...register("country", { required: true })}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Country"
                                    />
                                    {errors.country && (
                                        <div className="text-red-500 text-sm mt-1">Please Enter Your Country!</div>
                                    )}
                                </div>
                                <div>
                                    <label className="text-black font-medium block mb-1">City</label>
                                    <input
                                        {...register("city", { required: true })}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="City"
                                    />
                                    {errors.city && (
                                        <div className="text-red-500 text-sm mt-1">Please Enter Your City!</div>
                                    )}
                                </div>
                            </div>

                            <hr className="my-6" />
                            <PaymentForm/>
                            <hr className="my-6" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-black font-semibold block mb-1">Account Holder Name</label>
                                    <input
                                        {...register("accountHolderName", { required: true })}
                                        type="text"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Example: John Alex"
                                    />
                                    <small className="text-gray-500 block mt-1">
                                        Full name as displayed on account
                                    </small>
                                    {errors.accountHolderName && (
                                        <div className="text-red-500 text-sm mt-1">
                                            Please Enter Account Holder Name!
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="text-black font-semibold block mb-1">Account Number</label>
                                    <input
                                        {...register("accountNumber", { required: true })}
                                        type="number"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Example: 11223344"
                                    />
                                    {errors.accountNumber && (
                                        <div className="text-red-500 text-sm mt-1">
                                            Please Enter Your Account Number!
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300">

                                    <input
                                        {...register("transactionSlip", { required: true })}
                                        type="file"
                                        className=" opacity-0 "
                                        />
                                    <label className="text-black font-semibold mb-1">Upload Transaction Slip</label>
                                        </div>
                                    {errors.transactionSlip && (
                                        <div className="text-red-500 text-sm mt-1">
                                            Please Upload Transaction Slip!
                                        </div>
                                    )}
                                </div>
                            </div>

                            <hr className="my-6" />
                            <button
                                type="submit"
                                onClick={handlePaymentClick}
                                className="w-full font-semibold py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                Payment Now
                            </button>
                        </form>
                    </div>


                    <div className="w-1/1 h-fit md:w-1/2 lg:w-1/3 bg-white p-4 shadow rounded">
                        <h4 className="text-gray-700 font-bold mb-4">Your Cart</h4>
                        <ul className="divide-y divide-gray-200">
                            <li className="py-2 flex justify-between">
                                <span className="font-medium">Room Name</span>
                                <span>Master Room</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="font-medium">Room Price</span>
                                <span>Rs.3000/Night</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="font-medium">Check In</span>
                                <span>08/05/2020</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="font-medium">Check Out</span>
                                <span>12/05/2020</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="font-medium text-green-600">No Of Stay</span>
                                <span>4</span>
                            </li>
                            <li className="py-2 flex justify-between">
                                <span className="font-medium">Total Amount (PKR)</span>
                                <span className="font-semibold">12,000</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div className="relative bg-white w-full max-w-sm rounded shadow-lg p-6">
                        <div className="text-2xl font-bold text-center mb-2">Thank You!</div>
                        <div className="text-center mb-4">
                            Your payment has been processed successfully.
                        </div>
                        <div className="mt-4 text-center">
                            <p className="mb-4">
                                Once the admin confirms your booking, you will receive a confirmation email.
                            </p>
                            <p className="text-sm text-gray-500">
                                Please check your email inbox for further instructions.
                            </p>
                        </div>
                        <div className="text-center mt-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <br />
            <br />
        </>
    );
};

export default PaymentPage;
