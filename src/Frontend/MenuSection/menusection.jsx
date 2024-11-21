import React from "react";
import { useLocation } from "react-router-dom";

const MenuCard = ({ imageUrl, title, price, description }) => {
  return (
    <div className=" flex justify-center ">
      <div className="bg-gray-50 pricing-entry rounded flex  transition-transform hover:scale-105">
        <div
          className="img w-1/3 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="desc p-4 flex-grow ">
          <div className="d-md-flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">
              <span>{title}</span>
            </h3>
            <span className="price text-green-500 font-bold">${price}</span>
          </div>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
  const menuItems = [
    {
      imageUrl: "images/menu-1.jpg",
      title: "Grilled Crab with Onion",
      price: 20.0,
      description: "A small river named Duden flows by their place and supplies",
    },
    {
      imageUrl: "images/menu-2.jpg",
      title: "Grilled Crab with Onion",
      price: 20.0,
      description: "A small river named Duden flows by their place and supplies",
    },
    {
      imageUrl: "images/menu-3.jpg",
      title: "Grilled Crab with Onion",
      price: 20.0,
      description: "A small river named Duden flows by their place and supplies",
    },
    {
      imageUrl: "images/menu-4.jpg",
      title: "Grilled Crab with Onion",
      price: 20.0,
      description: "A small river named Duden flows by their place and supplies",
    },
    {
      imageUrl: "images/menu-5.jpg",
      title: "Grilled Crab with Onion",
      price: 20.0,
      description: "A small river named Duden flows by their place and supplies",
    },
    {
      imageUrl: "images/menu-6.jpg",
      title: "Grilled Crab with Onion",
      price: 20.0,
      description: "A small river named Duden flows by their place and supplies",
    },
  ];

  return (
    <section className="ftco-section">
      <div className="container px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-green-500 uppercase text-sm font-medium tracking-wide">
            Restaurant
          </span>
          <h2 className="text-3xl font-bold mt-2">Restaurant</h2>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>

        {/* View All Button */}
        {isHomePage && (
          <div className="text-center mt-10">
            <a
              href="/menu"
              className="border-2 rounded bg-blue-50 hover:text-white text-black px-6 py-3 hover:bg-blue-600 transition"
            >
              View All Menu
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantMenu;
