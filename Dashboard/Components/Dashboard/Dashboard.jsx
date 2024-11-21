import React, { useState } from 'react';
import './Dashboard.css'
import { Link,Route, Routes } from 'react-router-dom';
// import Summary from '../Summary/Summary';
import { useDispatch, useSelector } from 'react-redux';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'

import Users from '../Users/Users'
import ShowRoom from '../ShowRoom/ShowRoom'
import Summary from '../Summary/Summary'
import ErrorPage from '../ErrorPage/ErrorPage'
import AddRoom from '../addRoom/addRoom'
import Booking from '../RoomBooking/roombooking'
import BookingDetail from '../RoomBooking/checkoutdetail'
import BookingSuccess from '../RoomBooking/bookingsuccess'
import Transactions from '../Transactions/Transactions'
import EmployeeList from '../addemployee/EmployeeList';
import EmployeeTable from '../addemployee/EmployeeTable';



const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  let dispatch = useDispatch();
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);

  };

  let currentUser = useSelector((store) => {
    return store.userSection.currentUser;
  })


  return (
    <>
    <div className={`flex ${showSidebar ? 'sidebar-open' : ''}`} id="wrapper">
  {showSidebar && (
    <div className="bg-gray-100 border-r w-64" id="sidebar-wrapper">
      <div className="p-4 text-xl font-semibold bg-gray-200">Admin Panel</div>
      <nav className="flex flex-col space-y-4 p-4">
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-700">
            <VscAccount className="text-2xl" />
            <span className="font-medium">Admin</span>
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow hidden group-hover:block">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                dispatch({
                  type: "USER_LOGOUT",
                });
              }}
            >
              <Link to="/login">Logout</Link>
            </button>
          </div>
        </div>

        <Link to="/transactions" className="text-gray-700 hover:text-gray-900">
          Transactions
        </Link>
        <Link to="/addroom" className="text-gray-700 hover:text-gray-900">
          Add Room
        </Link>
        <Link to="/show-room" className="text-gray-700 hover:text-gray-900">
          Show Rooms
        </Link>
        <Link to="/employeelist" className="text-gray-700 hover:text-gray-900">
          Show Employee
        </Link>
      </nav>
    </div>
  )}

  <div id="page-content-wrapper" className="flex-1">
    <nav className="bg-gray-100 border-b px-4 py-2 flex items-center justify-between">
      <button
        className="text-gray-700 hover:text-gray-900"
        onClick={handleToggleSidebar}
      >
        {showSidebar ? <BsToggleOn className="text-xl" /> : <BsToggleOff className="text-xl" />}
      </button>
      <nav className="flex space-x-4">
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link to="/users" className="text-gray-700 hover:text-gray-900">
          Users
        </Link>
      </nav>
    </nav>
  </div>
</div>


        <div className="content">
          <Routes>
          <Route path='/' element={<Summary/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/addroom' element={<AddRoom/>}/>
          <Route path='/show-room' element={<ShowRoom/>}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/book-room/:roomid' element={<Booking/>}/>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/bookingdetail/:bookingId' element={<BookingDetail />} />
          <Route path='/bookingsuccess' element={<BookingSuccess />} />
          <Route path='/employeelist' element={<EmployeeList />} />
          <Route path='/employeetable' element={<EmployeeTable />} />
            {/* Add other routes as necessary */}
          </Routes>
        </div>
    </>);
};

export default Dashboard;
