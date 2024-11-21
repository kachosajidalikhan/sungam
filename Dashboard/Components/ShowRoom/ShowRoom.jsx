import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Flip } from "react-toastify";
import EditRoom from "./editroom";
import { useNavigate } from "react-router-dom";

const ShowRoom = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    try {
      axios.get("/get-room").then((resp) => {
        setRooms(resp.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleEdit = (room) => {
    setSelectedRoom(room);
    setShowEditModal(true);
  };

  const handleSave = (editedRoom) => {
    axios.put(`/update-room/${editedRoom._id}`, editedRoom).then(() => {
      const updatedRooms = rooms.map((room) =>
        room._id === editedRoom._id ? editedRoom : room
      );
      setRooms(updatedRooms);
      toast.success("Room updated", {
        transition: Flip,
        autoClose: 1000,
        position: "bottom-left",
        theme: "dark",
      });
      setShowEditModal(false);
    });
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedRoom(null);
  };

  const handleDelete = (roomId) => {
    axios
      .delete(`/delete-room?id=${roomId}`)
      .then(() => {
        const updatedRooms = rooms.filter((room) => room._id !== roomId);
        setRooms(updatedRooms);
        toast.warn("Room deleted", {
          transition: Flip,
          autoClose: 1000,
          position: "bottom-left",
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("There was an error deleting the room:", error);
        toast.error("Failed to delete room", {
          transition: Flip,
          autoClose: 3000,
          position: "bottom-left",
          theme: "dark",
        });
      });
  };

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">List of Rooms</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Room No</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Facilities</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Room Type</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{room.roomNo}</td>
                <td className="px-4 py-2 border-b">{room.roomName}</td>
                <td className="px-4 py-2 border-b capitalize">{room.roomFacilities}</td>
                <td className="px-4 py-2 border-b">RS. {room.roomPrice}</td>
                <td className="px-4 py-2 border-b">{room.roomType}</td>
                <td
                  className={`px-4 py-2 border-b ${
                    room.roomStatus === "Booked" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {room.roomStatus}
                </td>
                <td className="px-4 py-2 border-b flex gap-2">
                  <button
                    onClick={() => handleDelete(room._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(room)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`/book-room/${room._id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs"
                  >
                    Book Room
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <EditRoom
          room={selectedRoom}
          onSave={handleSave}
          onHide={handleCloseEditModal}
        />
      )}
    </div>
  );
};

export default ShowRoom;
