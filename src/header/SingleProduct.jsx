import React, { useState } from "react";
import Star from "../assets/icons/starsIcon.svg";
import Heart from "../assets/icons/heartColorlessIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, removeOrder } from "../store/orderSlice";
import { Link } from "react-router-dom";

const SingleProduct = ({ title, price, image, desc, rate, id, pageItems, setSingle }) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState(false)
  const orders = useSelector((state) => state.order.order);
  const selectedColor = orders.find((item) => id === item.id);
  const handleOrder = (id) => {
    const selectedItem = pageItems.find((item) => id === item.id);

    if (!selectedItem) return; // Item not found, handle accordingly

    const existingOrder = orders.find((orderItem) => id === orderItem.id);

    if (!existingOrder) {
        dispatch(addOrder(selectedItem));
        setColor(true);
    } else {
        dispatch(removeOrder(id));
        setColor(false);
    }
  };

  const handleSingle = (id) => {
    pageItems.filter((item) => {
      if (id == item.id) {
        setSingle(item);
      }
    });
  };

  return (
    <li>
      <div className="w-[280px] h-[420px] rounded-[15px] bg-white px-3 mr-10 sm:mx-auto">
        <div className="h-[270px] p-2">
          <Link to={"/single"} onClick={() => handleSingle(id)}>
            <img className="object-contain h-[250px]" src={image} alt={desc} />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <div className="flex space-x-3 mb-2">
              <h1 className="font-[600] text-[18px]">{price}$</h1>
              <h1 className="line-through text-gray-500">$112.80</h1>
            </div>
            <div className="flex space-x-3 mb-2">
              <img src={Star} alt="stars" />
              <p className="text-yellow-900 font-[600]">{rate}</p>
            </div>
          </div>
          <div>
            <button onClick={() => handleOrder(id)}>
              <img
                className={ selectedColor ? "w-[40px]  bg-red-400 px-2 py-2 rounded" : "w-[40px]  bg-blue-gray-100 px-2 py-2 rounded"}
                src={Heart}
                alt="heart"
              />
            </button>
          </div>
        </div>
        <div className="text-gray-700 space-y-2">
          <p>{title}</p>
        </div>
      </div>
    </li>
  );
};

export default SingleProduct;
