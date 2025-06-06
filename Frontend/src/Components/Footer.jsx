import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <img className="mb-5 w-32" src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                        ducimus ipsam earum illum mollitia cupiditate repudiandae pariatur
                        molestias Omnis delectus eius repudiandae aut nostrum the.
                    </p>
                </div>

                <div className="">
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+92330000000</li>
                        <li>talhaakram070@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className="py-5 text-sm text-center">&copy; 2025 - ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;
