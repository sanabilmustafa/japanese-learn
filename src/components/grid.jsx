'use client'
import data from '../../data/data.json'; // Adjust the path based on your project structure
import React from 'react';
import Card from './card';
import { useState } from 'react';
import Header from './header';
import Navbar from './navbar';
import Category from './category';


const Grid = () => {
const categories = [
    "all",
    "greetings",
    "everyday-japanese",
    "food",
    "verbs",
    "people",
    "relationships",
    "transportation",
    "measurements",
    "space",
    "weather",
    "adjectives",
    "animals",
    "objects",
    "phrases",
    "clothing",
    "education"
  ]
  const [searchName, setSearchName] = useState('')
  const [categoryName, setCategoryName] = useState('everyday-japanese')
  

  const filteredCards = data.filter((card) => {
    const isNameMatch = card.english?.toLowerCase().includes(searchName.toLowerCase());
    const isCategory = card.category.includes(categoryName.toLowerCase())
    
    return isNameMatch &&  isCategory
  });
  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
    
  };

  // const filterCategory = data.filter((card)=> {
  //   const isCategory = card.category.includes(categoryName.toLowerCase())

  //   return isCategory
  // });

  const [color, setColor] = useState('purple')
  const [category , setCategory] = useState(false)
  return (
   <div >
    <Navbar color={color}/>
    <div className={`border p-4 flex flex-wrap justify-center items-center`}>
      {categories.map((c) => {
        return(
          <div>
            <button className={`px-4 py-2 bg-blue-200 rounded-xl`} onClick={() => setCategoryName(c)}>{c}</button>
          </div>
        )
      })}
      {/* <button className={`px-4 py-2 bg-blue-200 rounded-xl`} onClick={() => setCategoryName('everyday-japanese')}>Everyday</button>
      <button className={`px-4 py-2 bg-blue-200 rounded-xl`} onClick={() => setCategoryName('numbers')}>Numbers</button> */}
    </div>
     {/* choose color start */}
     <div className='fixed bottom-0 z-10 w-full bg-white shadow-lg m-0'>
      <div className='flex justify-center w-full items-center '>
            {/* <button className={`rounded-full bg-${color}-200 shadow-xl p-3 hover:bg-${color}-400 align-middle cursor-pointer`} onClick={()=> setCategory(!category)}>Category</button> */}
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-red-200 m-1 my-3 border-4 border-red-300' onClick={() => setColor('red')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-yellow-200 m-1 my-3 border-4 border-yellow-300' onClick={() => setColor('yellow')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-blue-200 m-1 my-3 border-4 border-blue-300' onClick={() => setColor('blue')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-green-200 m-1 my-3 border-4 border-green-300' onClick={() => setColor('green')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-purple-200 m-1 my-3 border-4 border-purple-300' onClick={() => setColor('purple')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-pink-200 m-1 my-3 border-4 border-pink-300' onClick={() => setColor('pink')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-orange-200 m-1 my-3 border-4 border-orange-300' onClick={() => setColor('orange')}></button>
            <button className='w-7 h-7 md:w-10 md:h-10 md:m-3  rounded-full bg-gray-200 m-1 my-3 border-4 border-gray-300' onClick={() => setColor('gray')}></button>
        </div>
     </div>
       {/* choose color end */}
    <div className='section'>
      <Category category={category}/>
       <Header handleSearchChange={handleSearchChange} color={color}/>
      <div className='grid grid-cols-12'>
        {/* category starts  */}
       
        {/* category ends */}
        {/* cards grid start */}
      <div className='col-span-12'>
      <ul className='grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid gap-3'>
        {filteredCards.map((card) => (
          <Card item={card} color={color}/>
        ))}
        {/* {filterCategory.map((card) => (
          <Card item={card} color={color}/>
        ))} */}
      </ul>
      </div>
      {/* cards grid  */}
      </div>
  </div>
   </div>
  );
};

export default Grid;