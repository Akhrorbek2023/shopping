import React from "react";
import Check from "../assets/icons/checkIcon.svg";
import Heart from "../assets/icons/heartBlueIcon.svg";
import Stars from "../assets/icons/starsIcon.svg";
import Review from "../assets/icons/reviewIcon.svg";
import Sold from "../assets/icons/soldIcon.svg";

const Single = ({single}) => {
  return (
    <div className="bg-gray-100 py-[50px]">
      <div className="container">
        <div className="flex justify-between bg-white px-5 py-5 mb-10 rounded sm:block">
          <div className="w-[30%] sm:w-full">
            
                <img src={single.image} alt={single.title} />
                <div className="flex">
                <img className="w-[80px] p-2 rounded" src={single.image} alt={single.title} />
                <img className="w-[80px] p-2 rounded" src={single.image} alt={single.title} />
                <img className="w-[80px] p-2 rounded" src={single.image} alt={single.title} />
                <img className="w-[80px] p-2 rounded" src={single.image} alt={single.title} />
                </div>
           
          </div>
          <div className="w-[65%] sm:w-full">
            <div className="flex justify-between items-center sm:block">
              <div>
                <div className="flex space-x-2">
                  <img src={Check} alt="check" />
                  <p className="text-green-600">in stock</p>
                </div>
                <h1 className="text-[18px] font-[600]">
                  {single.title}
                </h1>
              </div>
              <button className="flex space-x-2 items-center">
                <img className="w-[20px]" src={Heart} alt="" />
                <p className="text-blue-700">Save for later</p>
              </button>
            </div>
            <div className="flex space-x-5">
              <div className="flex space-x-2">
                <img src={Stars} alt="stars" />
                <p className="text-yellow-900"></p>
              </div>
              <div className="flex space-x-2">
                <img src={Review} alt="review" />
                <p className="text-gray-600">32 reviews</p>
              </div>
              <div className="flex space-x-2">
                <img src={Sold} alt="sold" />
                <p className="text-gray-600">154 sold</p>
              </div>
            </div>
            <div className="flex bg-[#FFF0DF] space-x-[130px]  py-4 sm:space-x-0 sm:text-center sm:block">
              <div className="px-4 sm:px-0 ">
                <h1 className="font-[600] text-[18px] text-red-600">${single.price}</h1>
                <p className="text-gray-500">50-100 pcs</p>
              </div>
              <div className="px-4 sm:px-0 sm:border-none border-l-2 border-gray-500">
                <h1 className="font-[600] text-[18px]">$90.00</h1>
                <p className="text-gray-500">100-700 pcs</p>
              </div>
              <div className="px-4 sm:px-0 sm:border-none border-l-2 border-gray-500">
                <h1 className="font-[600] text-[18px]">$78.00</h1>
                <p className="text-gray-500">700+ pcs</p>
              </div>
            </div>
            <div>
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Price:</p>
                    <p className="text-gray-700 w-[250px]">Negotiable</p>
                </div>
                <hr />
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Type:</p>
                    <p className="text-gray-700 w-[250px]">{single.category}</p>
                </div>
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Material:</p>
                    <p className="text-gray-700 w-[250px]">Plastic Material</p>
                </div>
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Design:</p>
                    <p className="text-gray-700 w-[250px]">Modern nice</p>
                </div>
                <hr />
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Customization:</p>
                    <p className="text-gray-700 w-[250px]">Customized logo and design custom packages</p>
                </div>
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Protection:</p>
                    <p className="text-gray-700 w-[250px]">Refund Policy</p>
                </div>
                <div className="flex py-2">
                    <p className="w-[250px] text-gray-600">Warranty:</p>
                    <p className="text-gray-700 w-[250px]">2 years full warranty</p>
                </div>
                <hr />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#005ADE] px-5 py-4 rounded sm:block">
            <div>
                <h1 className="text-[20px] text-white font-[600]">Super discount on more than 100 USD</h1>
                <p className="text-gray-500">Have you ever finally just write dummy info</p>
            </div>
            <button className="text-white bg-yellow-900 px-4 py-2 rounded sm:w-full">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
