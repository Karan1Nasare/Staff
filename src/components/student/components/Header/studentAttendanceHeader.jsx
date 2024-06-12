import React, { useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { IoCloseOutline } from 'react-icons/io5';

const StudentAttendanceHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='w-full max-w-screen mx-auto overflow-y-scroll'>
      <h1 className='text-white text-3xl text-left'>Student</h1>
      <div className='flex gap-5 p-8 mt-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:flex-wrap max-md:px-5'>
        <div className='flex flex-1 gap-2.5 items-center max-md:flex-wrap max-md:max-w-full'>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            value={searchTerm}
            onChange={handleSearchChange}
            className='justify-center items-start self-stretch px-3 py-3 my-auto text-sm leading-5 w-72 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20 text-white text-opacity-20 max-md:pr-5'
          />
          <div
            className='flex justify-center items-center self-stretch p-1 h-12 w-11 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20 cursor-pointer'
            onClick={handleSearchClick}
          >
            <span className='text-white'>
              <MdOutlineSegment />
            </span>
          </div>
          <div className='flex flex-col justify-center self-stretch text-sm leading-5 text-white'>
            <div className='flex gap-2.5 justify-center h-12 px-5 py-3 rounded-md border border-gray-700 border-solid bg-secondary__fill__dark'>
              <div className='my-auto'>Select Date</div>
              <span className='mt-1'>
                <SlCalender />
              </span>
            </div>
          </div>
          <div className='relative shrink-0 flex h-12 py-2.5 justify-center rounded-md border w-28 border-gray-700 text-white border-solid bg-secondary__fill__dark'>
            <h2 className='mr-3'>Std-7</h2>
            <span>
              <IoCloseOutline style={{ fontSize: '1.4em' }} />
            </span>
          </div>
          <div className='flex relative shrink-0 h-12 py-2.5 w-20 justify-center rounded-md border border-gray-700 border-solid text-white bg-secondary__fill__dark'>
            <h2 className='mr-3'>A</h2>
            <span className=''>
              <IoCloseOutline style={{ fontSize: '1.4em' }} />
            </span>
          </div>
          <div className='flex flex-col justify-center self-stretch my-auto leading-5 text-white'>
            <div className='flex gap-2.5 h-12 w-40 py-3 justify-center rounded-md border border-gray-700 border-solid bg-secondary__fill__dark'>
              <div>Social Science</div>
              <span className='text-white'>
                <IoCloseOutline style={{ fontSize: '1.4em' }} />
              </span>
            </div>
          </div>
          <div className='self-stretch my-auto text-sm leading-5 text-white'>
            78 Students
          </div>
        </div>
        <div className='justify-center px-4 py-2.5 my-auto text-sm leading-6 text-center text-black whitespace-nowrap bg-white rounded-lg'>
          Save
        </div>
      </div>
    </div>
  );
};

export default StudentAttendanceHeader;
