import React from 'react'
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeadset,
  FaShieldAlt,
  FaUndo,
  FaTruck,
} from "react-icons/fa";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";


export default function Footer() {
  return (


    <footer className="mt-20">

      <div className="bg-[#eef5ef] py-8 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-4 rounded-2xl">
              <FaTruck className="text-white text-2xl" />
            </div>

            <div>
              <h3 className="font-bold text-[#1e293b] text-lg">
                Free Shipping
              </h3>

              <p className="text-gray-500">
                On orders over 500 EGP
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-4 rounded-2xl">
              <FaUndo className="text-white text-2xl" />
            </div>

            <div>
              <h3 className="font-bold text-[#1e293b] text-lg">
                Easy Returns
              </h3>

              <p className="text-gray-400">
                14-day return policy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-4 rounded-2xl">
              <FaShieldAlt className="text-white text-2xl" />
            </div>

            <div>
              <h3 className="font-bold text-[#1e293b] text-lg">
                Secure Payment
              </h3>

              <p className="text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>

     
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-4 rounded-2xl">
              <FaHeadset className="text-white text-2xl" />
            </div>

            <div>
              <h3 className="font-bold text-[#1e293b] text-lg">
                24/7 Support
              </h3>

              <p className="text-gray-500">
                Contact us anytime
              </p>
            </div>
          </div>
        </div>
      </div>

  
      <div className="bg-[#07142b] text-white px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
       
          <div className="lg:col-span-2">
       
            <div className="bg-white inline-flex items-center gap-2 px-6 py-4 rounded-2xl">
              <span className="text-white text-3xl">🛒</span>

              <h2 className="text-4xl font-bold text-[#1e293b]">
                FreshCart
              </h2>
            </div>

            <p className="text-gray-400 mt-8 leading-9 text-xl max-w-xl">
              FreshCart is your one-stop destination for quality
              products. From fashion to electronics, we bring you the
              best brands at competitive prices with a seamless
              shopping experience.
            </p>

          
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 text-gray-300">
                <IoCall className="text-white text-xl" />

                <span>+1 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <MdEmail className="text-white text-xl" />

                <span>support@freshcart.com</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <MdLocationOn className="text-white text-xl" />

                <span>
                  123 Commerce Street, New York, NY 10001
                </span>
              </div>
            </div>

            
            <div className="flex items-center gap-4 mt-8">
              <div className="w-14 h-14 rounded-full bg-[#13233f] flex items-center justify-center hover:bg-rose-400 duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-14 h-14 rounded-full bg-[#13233f] flex items-center justify-center hover:bg-rose-400 duration-300 cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-14 h-14 rounded-full bg-[#13233f] flex items-center justify-center hover:bg-rose-400 duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-14 h-14 rounded-full bg-[#13233f] flex items-center justify-center hover:bg-rose-400 duration-300 cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-3xl mb-8">Shop</h3>

            <ul className="space-y-5 text-gray-400 text-xl">
              <li><Link href="/">All Products</Link></li>
              <li><Link href="/">Categories</Link></li>
              <li><Link href="/">Brands</Link></li>
              <li><Link href="/">Electronics</Link></li>
              <li><Link href="/">Men&apos;s Fashion</Link></li>
              <li><Link href="/">Women&apos;s Fashion</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-3xl mb-8">Account</h3>

            <ul className="space-y-5 text-gray-400 text-xl">
              <li><Link href="/">My Account</Link></li>
              <li><Link href="/">Order History</Link></li>
              <li><Link href="/">Wishlist</Link></li>
              <li><Link href="/">Shopping Cart</Link></li>
              <li><Link href="/">Sign In</Link></li>
              <li><Link href="/">Create Account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-3xl mb-8">Support</h3>

            <ul className="space-y-5 text-gray-400 text-xl">
              <li><Link href="/">Contact Us</Link></li>
              <li><Link href="/">Help Center</Link></li>
              <li><Link href="/">Shipping Info</Link></li>
              <li><Link href="/">Returns & Refunds</Link></li>
              <li><Link href="/">Track Order</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1c2a44] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-lg">
            © 2026 FreshCart. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
  

