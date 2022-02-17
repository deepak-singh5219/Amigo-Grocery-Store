import { StarIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToBasket } from "../slices/basketSlice";

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  width,
  height,
}) {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  function addItemToBasket() {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      width,
      height,
      rating,
    };

    // Sending the product via an action to the redux store (= basket "slice")
    dispatch(addToBasket(product));

    toast.success(
      <>
        <span className="font-bold">Added to basket!</span>
        <br />
        {product.title.slice(0, 30)}
        {product.title.length > 30 ? "…" : ""}
      </>,
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        draggablePercent: 20,
        progress: undefined,
      }
    );
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 growing-hover">
      <p className="absolute top-2 right-3 text-sm italic text-gray-400">
        {category}
      </p>
      <img src={image} width={width} height={height} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
