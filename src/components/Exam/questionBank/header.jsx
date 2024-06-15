import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import ArrowRight from '../../../assets/icon/Group 38.svg';
import CreateExamPaper from '../createExamPaper/index';

const Header = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/createExamPaper');
  };
  const handleBackClick = () => {
    navigate('/exam');
  };
  return (
    <div className='mt-4 overflow-x-hidden'>
      <div className='flex mr-6 justify-between'>
        <div className='flex text-white'>
          <div className='border-r border-2 border-primary mr-2 h-7' />
          <h1 className='text-lg text-white text-left'>Question Bank</h1>
        </div>
        <div
          onClick={handleBackClick}
          className='flex text-white cursor-pointer'
        >
          <img
            src={ArrowRight}
            style={{
              marginRight: '0.5rem',
            }}
          ></img>
          <h2 className='mt-[3%]'>Back</h2>
        </div>
      </div>
      <div className=' bg-secondary__fill my-6 border p-8 w-full 2xl:h-6.5 flex justify-between max-w-screen mx-auto border-gray-700 rounded-xl'>
        <div className='flex'>
          <div className='flex'>
            <input
              className='p-2 w-80 h-11 mr-3 bg-secondary__fill__dark rounded-md text-white text-sm'
              type='text'
              placeholder=' Search Name, Innrollment, Standard'
            />
            <span className='p-3 bg-secondary__fill__dark mr-3 rounded-md text-white h-11 w-11'>
              <Icon
                icon={'octicon:filter-16'}
                className='text-white'
                width={20}
              />
            </span>
          </div>
          <div className='bg-secondary__fill__dark h-11 mr-3 rounded-md justify-center pt-2 w-24 text-white'>
            Select All
          </div>
          <h2 className='text-white pt-2'>4 Selected</h2>
        </div>
        <div className='flex'>
          <div className='flex w-16 bg-white h-11 justify-center rounded-md'>
            <button onClick={handleOnClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
