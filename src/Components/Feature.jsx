import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePriceChange } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import FeatureCard from './FeatureCard';


const data = [
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />,
    },
    {
        title: "Best Price Guarantee",
        icon: <MdOutlinePriceChange />,
    },
    {
        title: "Free Curbside Pickup",
        icon: <CiGift />,
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />,
    },
]

const Feature = () => {
  return (
    <div className="container pt-16 py-4">
        <div className="grid gap-4 md;grid-cols-2 lg:grid-cols-4">
            {data.map((el) => (
                <FeatureCard 
                key={el.title}
                icon={el.icon}
                />
            ))}
        </div>
    </div>
  )
}

export default Feature;