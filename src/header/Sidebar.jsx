import React, { useState } from "react";
import Up from "../assets/icons/arrowUpIcon.svg";
import Down from "../assets/icons/arrowDownIcon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [arrowCat, setArrowCat] = useState(true);
  const [arrowBrand, setArrowBrand] = useState(true);
  const [arrowFeat, setArrowFeat] = useState(true);

  return (
    <div className="mr-10">
     <div>
     <div className="flex justify-between w-[180px] mb-4">
        <h1 className="font-[600]">Category</h1>
        {arrowCat ? (
          <button onClick={() => setArrowCat(false)}>
            <img src={Down} alt="" />
          </button>
        ) : (
          <button onClick={() => setArrowCat(true)}>
            <img src={Up} alt="" />
          </button>
        )}
      </div>
      {
        arrowCat && 
        <div className="">
        <Link className="block mb-1 text-gray-700">Mobile Accecuary</Link>
        <Link className="block mb-1 text-gray-700">Electronics</Link>
        <Link className="block mb-1 text-gray-700">Smartphones</Link>
        <Link className="block mb-1 text-gray-700">Modern Tech</Link>
        <Link className="block mb-1  text-blue-500">See All</Link>
      </div>
      }
     </div>
     <div>
     <div className="flex justify-between w-[180px] mb-4">
        <h1 className="font-[600]">Brands</h1>
        {arrowBrand ? (
          <button onClick={() => setArrowBrand(false)}>
            <img src={Down} alt="" />
          </button>
        ) : (
          <button onClick={() => setArrowBrand(true)}>
            <img src={Up} alt="" />
          </button>
        )}
      </div>
      {
        arrowBrand && 
        <div className="text-gray-700">
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="samsung" id="samsung" />
        <label htmlFor="samsung">Samsung</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="apple" id="apple" />
        <label htmlFor="apple">Apple</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="huawei" id="huawei" />
        <label htmlFor="huawei">Huawei</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="pocco" id="pocco" />
        <label htmlFor="pocco">Pocco</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="lenovo" id="lenovo" />
        <label htmlFor="lenovo">Lenovo</label>
       </div>
       <Link className="block mb-1  text-blue-500">See All</Link>
      </div>
      }
     </div>
     <div className="flex justify-between w-[180px] mb-4">
        <h1 className="font-[600]">Brands</h1>
        {arrowFeat ? (
          <button onClick={() => setArrowFeat(false)}>
            <img src={Down} alt="" />
          </button>
        ) : (
          <button onClick={() => setArrowFeat(true)}>
            <img src={Up} alt="" />
          </button>
        )}
      </div>
      {
        arrowFeat && 
        <div className="text-gray-700">
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="metallic" id="metallic" />
        <label htmlFor="metallic">Metallic</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="plast" id="plast" />
        <label htmlFor="plast">Plastic Cover</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="ram" id="ram" />
        <label htmlFor="ram">8GB RAM</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="power" id="power" />
        <label htmlFor="power">Super Power</label>
       </div>
       <div className="flex space-x-2 mb-2">
        <input type="checkbox" name="memory" id="memory" />
        <label htmlFor="memory">Large Memory</label>
       </div>
       <Link className="block mb-1  text-blue-500">See All</Link>
      </div>
      }

    </div>
  );
};

export default Sidebar;
