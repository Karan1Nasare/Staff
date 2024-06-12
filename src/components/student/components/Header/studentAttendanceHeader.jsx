import React from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';

const StudentAttendanceHeader = () => {
  return (
    <div className='w-full max-w-screen mx-auto overflow-y-scroll'>
      <h1 className='text-white text-3xl text-left'>Student</h1>
      <div className='flex gap-5 p-8 mt-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:flex-wrap max-md:px-5'>
        <div className='flex flex-1 gap-2.5 items-center max-md:flex-wrap max-md:max-w-full'>
          <div className='justify-center items-start self-stretch px-3 py-3 my-auto text-sm leading-5 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20 text-white text-opacity-20 max-md:pr-5'>
            Search Name, Inrollment, Standerd
          </div>
          <div className='flex justify-center items-center self-stretch p-1 h-11 w-11 mt-1 rounded border border-solid bg-secondary__fill__dark border-gray-700 border-opacity-20'>
            <span className='text-white'>
              <MdOutlineSegment />
            </span>
          </div>
          <div className='flex flex-col justify-center self-stretch text-sm leading-5 text-white'>
            <div className='flex gap-2.5 justify-center px-5 py-3 rounded-md border border-gray-700 border-solid bg-secondary__fill__dark'>
              <div className='my-auto'>Select Date</div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/0208eed7c2e45ae92498a31f40c79e3ef4d0b67eb81da742db618af02e6e005e?'
                className='shrink-0 w-6 aspect-square'
              />
            </div>
          </div>
          <div className='relative shrink-0 h-11 rounded-md border border-gray-700 text-white border-solid bg-secondary__fill__dark'>
            Std-7
          </div>
          <div className='relative shrink-0 h-11 rounded-md border border-gray-700 border-solid text-white bg-secondary__fill__dark'>
            A
          </div>
          <div className='flex flex-col justify-center self-stretch my-auto text-sm leading-5 text-white'>
            <div className='flex gap-2.5 justify-center px-5 py-3 rounded-md border border-gray-700 border-solid bg-secondary__fill__dark'>
              <div>Social Science</div>
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
