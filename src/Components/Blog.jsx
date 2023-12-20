import React from 'react';
import BlogCard from './Blogcard';
import CAM from '../assets/cam.jpeg';
import GRE from '../assets/gre.jpeg';
import CUS from '../assets/cus.jpeg';


const data = [
    {
        img: CAM,
        title: "Healthy Food Healthy Life",
        date: "Dec 20, 2023",
        comment: 8,
    },
    {
        img: GRE,
        title: "Healthy Food Healthy Life",
        date: "Dec 20, 2023",
        comment: 1,
    },
    {
        img: CUS,
        title: "Healthy Food Healthy Life",
        date: "Dec 20, 2023",
        comment: 8,
    },
]



const Blog = () => {
  return (
    <div className="container pt-16">
       <h2 className="font-bold text-2xl">Latest News</h2>
       <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your blog
       </p>

       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
            <BlogCard 
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
            />
        ))}
       </div>
    </div>
  )
}

export default Blog;