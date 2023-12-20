import React from 'react';
import { RxCross1 } from "react-icons/rx";

const Cartproduct = ({ img, name, price }) => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
            <img 
            className='h-[100px]' 
            src={img} 
            alt={name} 
            />
            <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-600">1 + {price}</p>
            </div>
        </div>
        <RxCross1 />

    </div>
  );
};

export default Cartproduct;