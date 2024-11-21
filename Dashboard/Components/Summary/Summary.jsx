import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Summary = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [totalRooms, setTotalRooms] = useState(0);
  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsResponse = await axios.get("/bookingdetails");
        const roomsResponse = await axios.get("/get-room");

        setBookings(bookingsResponse.data);
        setRooms(roomsResponse.data);

        calculateTotalRevenue(bookingsResponse.data);
        setTotalBookings(bookingsResponse.data.length);
        setTotalRooms(roomsResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalRevenue = (bookings) => {
    const revenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
    setTotalRevenue(revenue);

    const revenueData = bookings.map((booking) => ({
      date: new Date(booking.createdAt).toDateString(),
      totalPrice: booking.totalPrice,
    }));

    setRevenueData(revenueData);
  };

  const revenueChartData = {
    labels: revenueData.map((data) => data.date),
    datasets: [
      {
        label: "Total Revenue",
        data: revenueData.map((data) => data.totalPrice),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const reports = [
    { title: "Total Rooms", iconClass: "cube-outline", total: totalRooms, badgeColor: "bg-blue-500" },
    { title: "Total Revenue", iconClass: "buffer", total: `Rs. ${totalRevenue}`, badgeColor: "bg-red-500" },
    { title: "Total Bookings", iconClass: "briefcase-check", total: totalBookings, badgeColor: "bg-blue-500" },
  ];

  return (
    <>
      <div className="text-center mb-8">
        <h4 className="text-3xl font-semibold">Welcome to the Dashboard</h4>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {reports.map((report, key) => (
            <div className="bg-primary p-6 rounded-xl shadow-lg text-white" key={key}>
              <div className="flex justify-between items-center mb-4">
                <i className={`mdi mdi-${report.iconClass} text-4xl`}></i>
              </div>
              <div>
                <h6 className="uppercase text-lg font-semibold mb-2">{report.title}</h6>
                <h2 className="text-3xl font-bold">{report.total}</h2>
                <span className="text-sm text-gray-300 mt-2">From Previous Records</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-8">
        <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Revenue Chart</h2>
          <Line data={revenueChartData} />
        </div>
      </div>
    </>
  );
};

export default Summary;
