import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormProvider, // Import FormProvider
  RHFSelect, // Import RHFSelect
  RHFTextField, // Import RHFTextField
} from '../../../hooks/hook-form';
import Cards from './cards';

const QuestionBank = () => {
  const methods = useForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async data => {
    console.log('nfjrkfjkttfjktnrf');
  };
  const handleAddQuestionBankClick = () => {
    console.log('Select Standard');
  };
  return (
    <div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className='2xl:grid 2xl:grid-cols-4 2xl:gap-2 2xl:w-2/3 xl:grid xl:grid-cols-4 xl:gap-2 lg:grid lg:grid-cols-4 lg:gap-2 md:grid md:grid-cols-2 md:gap-2'>
          <div className='text-white border border-gray-700 mr-3 rounded-md z-40 h-11 '>
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
          <div className='text-white z-40 border border-gray-700 mr-3 rounded-md h-11 '>
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
          <div className='text-white z-40 border border-gray-700 mr-3 rounded-md h-11'>
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
          <div className='text-white border border-gray-700 mr-3 rounded-md z-40 h-11 '>
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
      </FormProvider>
      <Cards />
    </div>
  );
};

export default QuestionBank;
