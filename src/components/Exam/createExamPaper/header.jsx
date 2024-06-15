import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
  RHFTextField, // Import RHFTextField
} from '../../../hooks/hook-form';
import Group38 from '../../../assets/icon/Group 38.svg';
import AddExamBasicDetails from '../addExamBasicDetails/index';

const Header = ({ setNextClick }) => {
  const navigate = useNavigate();
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.log('nfjrkfjkttfjktnrf');
  };
  const handleBackClick = () => {
    navigate('/examQuestionBank');
  };
  const handlePreviewClick = () => {
    navigate('/addExamBasicDetails');
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-4 overflow-x-hidden'>
        <div className='flex mr-6 justify-between'>
          <div className='flex text-white'>
            <div className='border-r border-2 border-primary mr-2 h-7' />
            <h1 className='text-lg text-white text-left'>Create Exam Paper</h1>
          </div>
          <div
            onClick={handleBackClick}
            className='flex text-white cursor-pointer'
          >
            <img
              src={Group38}
              style={{
                marginRight: '0.5rem',
              }}
            ></img>
            <h2 className='mt-[3%]'>Back</h2>
          </div>
        </div>
        <div className=' bg-secondary__fill my-6 border p-8 w-full 2xl:h-6.5 flex justify-between max-w-screen mx-auto border-gray-700 rounded-xl'>
          <div className='flex'>
            <input
              className='p-2 w-80 h-11 mr-3 bg-secondary__fill__dark rounded-md text-white text-sm'
              type='text'
              placeholder=' Search Name, Innrollment, Standard'
            />
            <div className='text-white border border-gray-700 mr-3 rounded-md z-40 w-52 h-11 '>
              <RHFSelect
                size='small'
                name='plan_type'
                options={[
                  { label: 'Bronze', value: 'bronze' },
                  { label: 'Silver', value: 'silver' },
                  { label: 'Gold', value: 'gold' },
                ]}
              />
            </div>
          </div>
          <div className='flex'>
            <div
              onClick={handlePreviewClick}
              className='flex w-20 bg-white h-11 justify-center rounded-md'
            >
              <button>Preview</button>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Header;
