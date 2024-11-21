import React, { useState } from "react";
import { Calendar, Building2, Car, Users, Utensils, FileText } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function EventsDetail() {
  const [activeTab, setActiveTab] = useState("details");
  const [openSection, setOpenSection] = useState(null);

  const images = ["birthday.jpg", "conference.jpg", "wedding.jpg", "other.jpg"];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-center sm:text-left">Ritz Marquee</h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-start space-x-4 border-b border-gray-200 mb-4">
        {["details", "pricing", "location", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-base pb-2 ${activeTab === tab
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      {activeTab === "details" && (
        <div className="grid sm:w-1/2 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="space-y-6 " >
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Building2 />, title: "VENUE TYPE", value: "Marquee/Banquet, Hall" },
                  { icon: <Car />, title: "PARKING SPACE", value: "70" },
                  { icon: <Utensils />, title: "CATERING", value: "Internal / External" },
                  { icon: <Users />, title: "STAFF", value: "Male" },
                  { icon: <Users />, title: "MAX GUEST", value: "2000" },
                  { icon: <FileText />, title: "STAGE", value: "Make your own Customize Stage with us!" },
                ].map(({ icon, title, value }, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 text-muted-foreground">{icon}</div>
                    <div>
                      <p className="text-black font-semibold">{title}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="w-full sm:w-auto px-3 py-2 bg-blue-600 text-white rounded transition hover:bg-blue-700">
                Send Message
              </button>
              <button className="w-full sm:w-auto px-3 py-2 bg-gray-200 text-gray-700 rounded transition hover:bg-gray-300">
                Book Now
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-lg font-semibold">Price Range</p>
              <p className="text-xl text-black font-bold">PKR 1,450 - PKR 3,000</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {/* Main Carousel */}
            <Swiper
              modules={[Navigation]}
              navigation
              loop
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-lg overflow-hidden"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative w-full h-[50px] sm:h-[70px] lg:h-[100px]">
                  <img
                    src={`./images/${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {activeTab === "pricing" && (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
         <div className="max-w-lg font-sans">
            <h2 className="text-2xl font-bold mb-4">Venue Pricing</h2>

            {/* Hall B Section */}
            <div className="mb-2 border border-gray-300 rounded-lg overflow-hidden">
              <div
                className="p-4 bg-gray-100 cursor-pointer flex justify-between items-center"
                onClick={() => toggleSection('hallB')}
              >
                <span className="text-black font-semibold">Wedding Hall</span>
                <span>{openSection === 'hallB' ? '▲' : '▼'}</span>
              </div>
              {openSection === 'hallB' && (
                <div className="p-4 bg-white">
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="mr-2" role="img" aria-label="Air Conditioning">❄️</span>
                        <strong className="text-black">AIR CONDITIONING</strong>
                      </div>
                      <div>PKR 25,000</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="mr-2" role="img" aria-label="Heating">🔥</span>
                        <strong className="text-black">HEATING</strong>
                      </div>
                      <div>PKR 3,000</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="mr-2" role="img" aria-label="Venue Capacity">👥</span>
                        <strong className="text-black">VENUE CAPACITY</strong>
                      </div>
                      <div>300 - 500</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="mr-2" role="img" aria-label="Flower Decor">🌸</span>
                        <strong className="text-black text-sm">CUSTOM STAGE STARTS FROM</strong>
                      </div>
                      <div>PKR 25,000</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === "location" && (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="font-medium text-center md:text-left">
            Shimla Hill, Muhammad Nagar Garhi Shahu, Lahore
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <p className="text-gray-500 text-center md:text-left">Reviews will be displayed here.</p>
        </div>
      )}
    </div>
  );
}
