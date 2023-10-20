import React, { useEffect, useState } from "react";
import Star from "../assets/icons/starsIcon.svg";
import Heart from "../assets/icons/heartColorlessIcon.svg";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
 

const Hero = ({single, setSingle}) => {
 const url = "http://localhost:8000/products"
 const [data, setData] = useState([])
 const [pageItems, setPageItems] = useState([])   
 const [page, setPage] = useState(1);
 const [limit, setLimit] = useState(9);
 const [order, setOrder] = useState([])
 

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const updateItems = () => {
        const skip = (page - 1) * limit;
        let items = [];

        for(let i = 0; i < data.length; ++ i) { 
            if(skip > i) continue;
            if(skip + limit <= i) break;

            items.push(data[i]) 
        }
        setPageItems([...items]);
    }

    useEffect(() => {
        updateItems();
    },[data,page,limit]);

    const getItemProps = (index) =>
    ({
      variant: page === index ? "filled" : "text",
      color: "gray",
      onClick: () => setPage(index),
    });
   
    const handleSingle = (id)=>{
      pageItems.filter((item)=>{
        if(id == item.id){

          setSingle(item)
        }
      })
    }

    

  
    const handleOrder = (id)=>{
      pageItems.filter((item)=>{
        if(id == item.id){
         setOrder(item)
        }
      })
      
    }
   

    useEffect(() => {
      handleOrder()
      localStorage.setItem('favourite',  JSON.stringify(order.item))
    },[order.item])

  
    
  return (
   <div className="mx-auto">
     <div className="grid grid-cols-3 space-y-5 sm:grid-cols-1 sm:mx-auto sm:w-full">
      {
        pageItems?.map((item)=>(
            <div className="w-[280px] bg-white px-3 mr-10 sm:mx-auto" key={item.id}>
        <div className="h-[250px]">
            <Link to={"/single"} onClick={()=>handleSingle(item.id)}>
            <img className="object-contain h-[250px]" src={item.image} alt={item.title} />
            </Link>
        </div>
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <div className="flex space-x-3 mb-2">
              <h1 className="font-[600] text-[18px]">$99.50</h1>
              <h1 className="line-through text-gray-500">$112.80</h1>
            </div>
            <div className="flex space-x-3 mb-2">
              <img src={Star} alt="stars" />
              <p className="text-yellow-900 font-[600]">7.5</p>
            </div>
          </div>
          <div>
            <button onClick={()=>handleOrder(item.id)}>
            <img className="w-[40px]  bg-blue-gray-100 px-2 py-2 rounded" src={Heart} alt="heart" />
            </button>
          </div>
        </div>
        <div className="text-gray-700 space-y-2">
          <p>GoPro HERO6 4K Action</p>
          <p>Camera-Black</p>
        </div>
      </div>
        ))
      }
    
    </div>
    <div className="flex items-center gap-4 sm:gap-0 sm:w-full sm:text-sm mx-auto py-[30px]">
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => setPage(page + 1)}
                disabled={page === 2}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
   </div>
    
  );
};

export default Hero;
