import { getSpecificProduct } from "_/api/services/route.services";
import { productType } from "_/api/types";
import AddToCardButton from "_/app/_components/AddToCardButton/AddToCardButton";
import { Button } from "_/components/ui/button";
import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { ImPower } from "react-icons/im";

const page = async ({ params }: { params: Promise<{ id: string }> }) => 
    {
  const id = (await params).id;

  

  const receiveData = await getSpecificProduct(id);
  console.log(receiveData);

  return <div className="px-4 py-6 md:p-10  md:gap-8 ">


<div className="grid grid-cols-1 md:grid-cols-2  md:p-10   lg:grid-cols-4  gap-4 items-start">
    <div className="col-span-1  border  md:p-8  border-gray-400 rounded-[12px]">
     <img src={receiveData?.imageCover} alt={receiveData?.title} className=" object-cover" />

    </div>
    <div className="col-span-3 p-2">
        <div className="flex items-center gap-2">
            <h3 className="bg-rose-200 text-rose-500 px-[12] py-[6] rounded-[33554400px]">{receiveData?.category.name}</h3>
        <h3 className="bg-[#F3F4F6] text-[#364153] px-[12] py-[6] rounded-[33554400px]">{receiveData?.brand.name}</h3>
        </div>
        <h1 className="text-[30px] font-bold my-2 text-rose-400">{receiveData?.title}</h1>
        
        
        <div className='flex items-center gap-1'><FaStar className='text-[#FCC800]' />   <p className='text-gray-500 text-[18px] font-medium'>{receiveData?.ratingsAverage} <span>{`(${receiveData?.ratingsQuantity})`}</span></p></div>
         <h5 className='text-[30px] font-bold my-2'>{receiveData?.priceAfterDiscount? <>
                <span className='text-red-500 line-through me-2 text-[30px]'>{receiveData?.price}</span>
                <span className='text-[30px] text-rose-400 '>{receiveData?.priceAfterDiscount} LE</span>
                </> :<span className='text-rose-400 text-[30px]'>{receiveData?.price} LE</span> }</h5>

        <p className="text-[16px] text-[#4A5565] border-t pt-5 pb-5">{receiveData?.description}</p>

        <div className="flex items-center justify-between">
            {/* <Button className="w-[48%] cursor-pointer bg-rose-400 shadow-md shadow-rose-500"> <FaShoppingCart className="ms-1" />Add to Cart</Button> */}
         <AddToCardButton id={receiveData?.id}  classNames="w-[48%]  cursor-pointer bg-rose-400 shadow-md shadow-rose-500">
            <FaShoppingCart className="ms-1" />
            <h6>Add to Cart</h6>
        </AddToCardButton>

    
        <Button className="w-[48%] cursor-pointer bg-rose-400 shadow-md shadow-rose-500"><ImPower className="ms-1" />Buy Now</Button>
        </div>
       
    </div>

  </div>




  </div>

};

export default page;
