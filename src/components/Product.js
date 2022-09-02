import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket } from "../slices/basketSlice";



function Product({id, title, mrp, price, description, expiry, category, image}) {
    
    const dispatch = useDispatch();
    

    const addItemToBasket = () => {

        const product = {id, title, price, description, category, image};
        
        // sending the product as action to REDUX store i.e basket slice
        dispatch(addToBasket(product));

    };
    
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            {/* disp: category */}
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            {/* disp: image */}
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* disp: title */}
            <h4 className="my-3 font-bold">{title}</h4>
            

            {/* disp: description */}
            <p className="text-xm my-2 line-clamp-2">{description}</p>

            <p className="text-xs font-bold my-2 line-clamp-2 text-red-500 ">{expiry}</p>

            {/* disp: price */}
            <div className="mb-5 flex">
                <div className="mb-5 line-through mr-3">
                    <Currency  quantity={mrp} currency="INR" />
                </div>
                <Currency quantity={price} currency="INR" />
                
                
            </div>

            

            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
            
        </div>
    );
}

export default Product;
