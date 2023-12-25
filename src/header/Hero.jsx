import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import SingleProduct from "./SingleProduct";

const Hero = ({ single, setSingle }) => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [pageItems, setPageItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  const updateItems = () => {
    const skip = (page - 1) * limit;
    let items = [];

    for (let i = 0; i < data.length; ++i) {
      if (skip > i) continue;
      if (skip + limit <= i) break;

      items.push(data[i]);
    }
    setPageItems([...items]);
  };

  useEffect(() => {
    updateItems();
  }, [data, page, limit]);

  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: "gray",
    onClick: () => setPage(index),
  });

 

 

  

  console.log(pageItems);

  return (
    <div className="mx-auto">
      <ul className="grid grid-cols-3 space-y-5 sm:grid-cols-1 sm:mx-auto sm:w-full">
        {pageItems?.map((item) => (
             <SingleProduct
             key={item.id}
             title={item.title}
             price={item.price}
             rate={item.rating.rate}
             image={item.image}
             desc={item.description}
             id={item.id}
             pageItems={pageItems}
             setSingle={setSingle}
           />
        ))}
      </ul>
      <div className="flex items-center gap-4 w-[400px] sm:gap-0 sm:w-full sm:text-sm mx-auto py-[30px]">
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
          <IconButton {...getItemProps(3)}>3</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={() => setPage(page + 1)}
          disabled={page === 3}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
