import React from 'react';
import StudentAttendanceHeader from './Header/studentAttendanceHeader';

const StudentAttendance = () => {
  return (
    <div className='flex flex-col'>
      <StudentAttendanceHeader />
      <div className='flex gap-5 justify-between px-8 py-6 mt-8 w-full text-white rounded-md border border-gray-700 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full'>
        <div className='flex gap-3 text-base'>
          <img
            loading='lazy'
            srcSet='...'
            className='shrink-0 aspect-square w-[37px]'
          />
          <div className='my-auto'>Chirag Gondaliya</div>
        </div>
        <div className='flex gap-4 my-auto text-base whitespace-nowrap'>
          <div className='justify-center p-2.5 rounded-md border border-solid border-white border-opacity-10'>
            P
          </div>
          <div className='justify-center p-2.5 rounded-md border border-solid border-white border-opacity-10'>
            A
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
