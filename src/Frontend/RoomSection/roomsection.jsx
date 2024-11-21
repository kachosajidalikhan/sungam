import React from "react";
import { useNavigate } from "react-router";

const RoomCard = ({ imageUrl, title, price, detailsLink }) => {
  const nav = useNavigate();
  return (
    <div className="room-wrap flex flex-col lg:flex-row">
      <a
        href="#"
        className="img w-full lg:w-1/2 bg-cove bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></a>
      <div className="half left-arrow flex items-center p-4 text-center">
        <div className="text">
          <p className=" mb-2">
            {"⭐".repeat(5)} {/* Display 5 stars */}
          </p>
          <p className="mb-2">
            <span className="price mr-1">${price}</span>
            <span className="per text-sm">per night</span>
          </p>
          <h3 className="mb-3">
            <a href="#">{title}</a>
          </h3>
          <p className="pt-1">
            <a
              className=" btn-custom px-3 py-2 bg-blue-50 text-gray rounded transition"
              onClick={()=>{nav("/roomdetail")}}
            >
              View Details <span className="ml-2 ">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = () => {
  const rooms = [
    {
      imageUrl: "images/room-6.jpg",
      title: "King Room",
      price: 120.0,
    },
    {
      imageUrl: "images/room-1.jpg",
      title: "Suite Room",
      price: 120.0,
    },
    {
      imageUrl: "images/room-2.jpg",
      title: "Family Room",
      price: 120.0,
    },
    {
      imageUrl: "images/room-3.jpg",
      title: "Deluxe Room",
      price: 120.0,
    },
    {
      imageUrl: "images/room-4.jpg",
      title: "Luxury Room",
      price: 120.0,
    },
    {
      imageUrl: "images/room-5.jpg",
      title: "Superior Room",
      price: 120.0,
    },
  ];

  return (
    <section>
        <br/>
        <br/>
      <div className="container-fluid px-0">
        {/* Section Heading */}
        <div className="row no-gutters justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <span className="text-green-500 text-sm font-medium uppercase tracking-wide">
              Harbor Lights Rooms
            </span>
            <h2 className="text-3xl font-bold mt-2">Hotel Master's Rooms</h2>
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid lg:grid-cols-2">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              imageUrl={room.imageUrl}
              title={room.title}
              price={room.price}
              detailsLink={room.detailsLink}
            />
          ))}
        </div>
      </div>
      <br/>
      <br/>
    </section>
  );
};

export default RoomsSection;
