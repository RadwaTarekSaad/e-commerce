import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa";

import { ProductCardProps } from './productCard.types'
import { Button } from '_/components/ui/button'
import AddToCardButton from '../AddToCardButton/AddToCardButton';

export const ProductCard = ({product}:ProductCardProps) => {
  return (
    <div  className=' border border-[#E5E7EB] rounded-[8px]  p-2'> 
              <img src={product.imageCover} alt={product.title} className='rounded-t-[8PX]'/>
              <div className='p-4'>
                <div className='text-xs text-[#6A7282]'>
                 {product.category.name}
                </div>
                <h2 className='font-medium text-xl text-rose-400 '>{product.title.split(" ",2).join(" ")}</h2>
                <div className='flex items-center gap-1'><FaStar className='text-[#FCC800]' />   <p className='text-gray-500'>{product.ratingsAverage} <span>{`(${product.ratingsQuantity})`}</span></p></div>

                <div className='flex items-center justify-between'>
                    <h5 className='font-bold '>{product.priceAfterDiscount? <>
                <span className='text-red-500 line-through me-2 text-[18px]'>{product.price}</span>
                <span className='text-[18px] text-rose-400 '>{product.priceAfterDiscount} LE</span>
                </> :<span className='text-rose-400 text-[18px]'>{product.price} LE</span> }</h5>
              <AddToCardButton classNames='bg-rose-400 cursor-pointer hover:scale-[1.3]' id={product.id}>
                <FaPlus />
              </AddToCardButton>
                </div>
                </div>
                  
    
              </div>
  )
}

export default ProductCard
