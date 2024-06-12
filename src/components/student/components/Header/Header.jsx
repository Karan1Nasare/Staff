import React from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
// import { TiUserAdd } from 'react-icons/ti';

const Header = ({ inputValue, handleInputChange, handleSearchClick }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full max-w-screen mx-auto overflow-y-scroll'>
      <h1 className='text-white text-3xl text-left'>Student</h1>
      <div className='bg-secondary__fill rounded-xl p-4 mt-6 border border-gray-700 h-28 flex justify-between'>
        <div className='flex'>
          <input
            key={7}
            onChange={handleInputChange}
            value={inputValue}
            className='p-2 h-10 rounded-sm text-white w-80 mt-4 opacity-45 bg-blue'
            type='text'
            placeholder=' Search Name, Innrollment, Standard'
          />
          <span
            onClick={handleSearchClick}
            className='p-2 mt-4 bg-opacity-45 rounded-sm text-white m-2 h-10 w-10 bg-blue'
          >
            <MdOutlineSegment />
          </span>
        </div>
        <div
          onClick={() => navigate('/studentAttendance')}
          className='w-48 mt-4 h-11 p-3 bg-white rounded-lg flex '
        >
          <span className='pt-1 pr-2 '>
            <IoIosAddCircle />
          </span>
          <button>Student Attendance</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
