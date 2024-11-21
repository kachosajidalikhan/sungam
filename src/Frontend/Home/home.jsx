import React from 'react';
import HeroSection from '../HeroSection/herosection';
import CheckAvailability from '../CheckAvailability/checkavailability';
import Aboutsection from '../AboutSection/aboutsection';
import Testimonial from '../Testimonial/testimonial';
import Roomsection from '../RoomSection/roomsection';
import RestaurantMenu from '../MenuSection/menusection';
import "./home.css"

const Home = () => {
    return (
        <>
            <HeroSection />
            <CheckAvailability />
            <Aboutsection />
            <Roomsection/>
            <Testimonial/>
            <RestaurantMenu/>


        </>
    );
};

export default Home;
