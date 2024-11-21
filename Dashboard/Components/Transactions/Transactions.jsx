import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Flip } from "react-toastify";

const Transactions = () => {
  const [datas, setDatas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentImage("");
  };

  const getData = async () => {
    try {
      const response = await axios.get("/checkoutdetail");
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateTransactionStatus = async (transactionId, status) => {
    try {
      const response = await axios.put("/update-transaction-status", {
        trID: transactionId,
        status,
      });

      if (response.status === 200) {
        const updatedDatas = datas.map((transaction) =>
          transaction._id === transactionId
            ? { ...transaction, paymentStatus: status }
            : transaction
        );
        setDatas(updatedDatas);
        toast.success(`Transaction status updated to ${status}`, {
          transition: Flip,
          autoClose: 1000,
          position: "bottom-left",
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Error updating transaction status", {
        transition: Flip,
        autoClose: 3000,
        position: "bottom-left",
        theme: "dark",
      });
    }
  };

  const handleCheckout = async (bookingId) => {
    try {
      const response = await axios.put("/checkout-user", { bookingId: bookingId });
      alert("Checkout successful");
    } catch (error) {
      alert("Failed to checkout");
    }
  };

  return (
    <>
      <div className="my-6 text-center">
        <h2 className="text-3xl font-semibold">Transactions</h2>
      </div>

      <div className="overflow-x-auto px-4">
        <table className="min-w-full table-auto border-collapse bg-white rounded-xl shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Transaction Slip</th>
              <th className="px-4 py-2 text-left">RoomNo</th>
              <th className="px-4 py-2 text-left">Room Type</th>
              <th className="px-4 py-2 text-left">Customer Email</th>
              <th className="px-4 py-2 text-left">Account Holder Name</th>
              <th className="px-4 py-2 text-left">Subtotal</th>
              <th className="px-4 py-2 text-left">Payment Status</th>
              <th className="px-4 py-2 text-left">Check Out</th>
              <th className="px-4 py-2 text-left">Date Of Submission</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((transaction) => (
              <tr className="border-b" key={transaction._id}>
                <td
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleImageClick(transaction.transactionSlip)}
                >
                  <img
                    src={transaction.transactionSlip}
                    alt="Transaction Slip"
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{transaction.roomNo}</td>
                <td className="px-4 py-2">{transaction.roomName}</td>
                <td className="px-4 py-2">{transaction.email}</td>
                <td className="px-4 py-2">{transaction.accountHolderName}</td>
                <td className="px-4 py-2">RS.{transaction.totalCost}</td>
                <td
                  className={`px-4 py-2 ${
                    transaction.paymentStatus === "Pending"
                      ? "text-blue-500"
                      : transaction.paymentStatus === "Success"
                      ? "text-green-500"
                      : transaction.paymentStatus === "Rejected"
                      ? "text-red-500"
                      : "text-black"
                  }`}
                >
                  {transaction.paymentStatus}
                </td>
                <td
                  className={`px-4 py-2 ${
                    transaction.checkOut === "Checked Out" ? "text-red-500" : "text-black"
                  }`}
                >
                  {transaction.checkOut}
                </td>
                <td className="px-4 py-2">
                  {transaction.updatedAt.slice(0, 10).split("-").reverse().join("/")}
                </td>
                {transaction.checkOut === "Checked Out" ? (
                  <td className="px-4 py-2">Check Out Confirmed</td>
                ) : (
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"
                      onClick={() => updateTransactionStatus(transaction._id, "Success")}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                      onClick={() => updateTransactionStatus(transaction._id, "Rejected")}
                    >
                      Reject
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600"
                      onClick={() => handleCheckout(transaction._id)}
                    >
                      Check Out
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying the transaction slip image */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleModalClose}
        >
          <div className="bg-white p-4 rounded-lg">
            <button
              onClick={handleModalClose}
              className="absolute top-0 right-0 p-2 text-gray-700 hover:text-gray-900"
            >
              X
            </button>
            <img
              src={currentImage}
              className="w-full h-auto"
              alt="Transaction Slip"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
