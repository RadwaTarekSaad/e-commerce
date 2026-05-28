import { getAllProducts } from "_/api/services/route.services";

import React, { lazy, Suspense } from "react";

import ProductCard from "./_components/ProductCard/ProductCard";
import img1 from "@images/img1.png"
import img2 from "@images/img2.webp"
import img3 from "@images/img3.jpg"



import  Link  from 'next/link';
import MySwipper from "./_components/MySwipper/MySwipper";

import { BounceLoader } from "react-spinners";


const CategorySubPartLazyLoaded= lazy(()=>import("./_components/CategorySubPart/CategorySubPart"))

export default async function HomePage() {
  const allProducts = await getAllProducts();
  // console.log("allProducts", allProducts);

  return (
    <div>
<MySwipper imagesList={[img1.src,img2.src,img3.src]}/>
<Suspense fallback={<div className="w-full py-20 flex items-center justify-center"><BounceLoader color="pink" /></div>}>
<CategorySubPartLazyLoaded/>
</Suspense>

        <div className='flex items-center px-10'>
        <span className="w-2 h-10 bg-gradient-to-b from-rose-400 to-pink-500 rounded-t rounded-b"></span>

        <h2 className='text-[30px] font-bold    pl-4  text-[#1E2939] '>Featured <span className='text-rose-400'>Products</span></h2>
        </div>
        

      

      <div className="grid md:grid-cols-4 lg:grid-cols-5 md:p-10  md:gap-8">
        {allProducts?.map((product) => {
          return (
          
              <Link  key={product.id} href={`/products/${product.id}`} >
                <ProductCard product={product}  />
              </Link>
           
          );
        })}
      </div>
    </div>
  );
}
