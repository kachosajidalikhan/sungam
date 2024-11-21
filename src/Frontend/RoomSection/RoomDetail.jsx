import React from "react";
import { Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import { useNavigate } from "react-router";

import "swiper/css";
import "swiper/css/navigation";

const RoomDetail = () => {
    const nav = useNavigate();
    const images = ["room-4.jpg", "room-5.jpg", "room-6.jpg", "room-3.jpg"];
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="row no-gutters justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <span className="text-green-500 text-sm font-medium uppercase tracking-wide">
              Harbor Lights Rooms
            </span>
            <h2 className="text-3xl font-bold mt-2">Rooms Detail</h2>
          </div>
        </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {/* Main Carousel */}
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`./images/${image}`}
                                    alt={`Room ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Carousel */}
                    <div className="grid grid-cols-3 gap-2">
                        {images.slice(1).map((image, index) => (
                            <div key={index} className="relative w-full h-[100px]">
                                <img
                                    src={`./images/${image}`}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Room Details Section */}
                <div className="space-y-6">
                    {/* Room Title and Info */}
                    <div>
                        <h1 className="text-3xl font-bold">Deluxe Ocean View Suite</h1>
                        <p className="text-gray-600">2 guests · 1 bedroom · 1 bath</p>
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                        <p className="text-gray-600">
                            Experience luxury and comfort in our Deluxe Ocean View Suite. This
                            spacious room offers breathtaking views of the ocean, modern
                            amenities, and a private balcony for your relaxation.
                        </p>
                    </div>

                    {/* Amenities */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Wi-Fi",
                                "Air conditioning",
                                "Flat-screen TV",
                                "Mini-bar",
                                "Room service",
                                "Ocean view",
                            ].map((amenity) => (
                                <span
                                    key={amenity}
                                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                                >
                                    {amenity}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Booking Section */}
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Book this room</h2>
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="text-gray-600" />
                            <span>Available from Jun 1, 2024</span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-2xl font-bold">$299</span>
                            <span className="text-gray-600">per night</span>
                        </div>
                        <button onClick={()=>{nav('/bookingpage')}} className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;
