import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const AddBlogButton = () => {
  return (
    <section>
      <div className='flex justify-center py-5 text-lg'>
        <Link to="/addBlog">
          <button className='flex items-center bg-yellow-300 border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 hover:bg-yellow-400 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 active:bg-yellow-500 active:border-yellow-500 transition duration-150 ease-in-out'>
            Add Blog <FaPlus className='ml-2' />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default AddBlogButton;