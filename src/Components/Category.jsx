import React from 'react';
import FRUITS from '../assets/fruits.jpg';
import VEG from '../assets/veg.jpg';
import CAN from '../assets/can.jpg';
import BREAD from '../assets/bread.jpg';
import FISH from '../assets/fish.jpg';
import EGG from '../assets/egg.jpg';
import DRINKS from '../assets/drink.jpg';
import CategoryCard from './CategoryCard';

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: FRUITS,
    },
    {
        id: 1,
        name: "Fresh VEGS",
        count: "8 Products",
        img: VEG,
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "10 Products",
        img: CAN,
    },
    {
        id: 3,
        name: "Bread & Brakery",
        count: "12 Products",
        img: BREAD,
    },
    {
        id: 4,
        name: "Fishes",
        count: "10 Products",
        img: FISH,
    },
    {
        id: 5,
        name: "Eggs & Diary",
        count: "7 Products",
        img: EGG,
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "8 Products",
        img: DRINKS,
    },
    {
        id: 7,
        name: "Fresh Frits",
        count: "9 Products",
        img: FRUITS,
    },
]


const Category = () => {
  return (
    <div className='container pt-16'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
            <CategoryCard key={el.id}
            img={el.img}
            name={el.name}
            count={el.count} 
            />
            ))}
        </div>
    </div>
  );
};

export default Category;