import React from "react";
import { useDispatch } from "react-redux";
import { removeOrder } from "../store/orderSlice";
import { useSelector } from "react-redux";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.order);
  console.log(orders);
  return (
    <div>
      <div className="container">
        <div className="px-5 py-5 rounded border">
          {orders?.map((item) => (
            <div
              className="flex justify-between pb-5 border-b-2 sm:block p-6 h-[280px]"
              key={item.id}
            >
              <div className="flex space-x-10 sm:block sm:space-x-0">
                
                  <img className="w-[200px] bg-gray-400 sm:h-[180px] sm:w-full sm:mb-4" src={item.image} alt={item.description} />
                
                <div className="sm:w-full">
                  <h1 className="font-[600] mb-2"></h1>
                  <p className="text-gray-600">
                    Size:mediul , Color:blue, material:plastic
                  </p>
                  <p className="text-gray-600 mb-2">Seller: Artel Market</p>
                  <div className="space-x-3">
                    <button
                      onClick={() => dispatch(removeOrder(item.id))}
                      className="px-5 py-1 border rounded text-red-700"
                    >
                      Remove
                    </button>
                    <button className="px-5 py-1 border rounded text-blue-600">
                      Save for later
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-[600]">$99.00</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
