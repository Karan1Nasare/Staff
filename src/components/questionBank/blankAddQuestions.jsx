import React, { useState } from 'react';
import objectIcon from '../../assets/icon/objectIcon.svg';
import EditDeleteQuestion from './editDeleteQuestion';
import AddQuestions from './addQuestion';

const BlankAddQuestions = () => {
  const [addQuestion, setAddQuestion] = useState(false);
  return (
    <div className='text-white'>
      <div className='flex mb-7 w-full mt-4'>
        {addQuestion ? (
          <AddQuestions />
        ) : (
          <div className='flex-shrink-0 w-44.1 3xl:w-[46%] xl:w-[43%] lg:w-[42%] md:w-[90%] sm:w-[100%] h-39.3 rounded-md border border-gray-700 bg-secondary__fill flex flex-col items-center justify-center'>
            <img
              className='w-84 2xl:w-96 mt-10 mb-3'
              src={objectIcon}
              alt='Object Icon'
            />
            <h3 className='mt-4'>
              <span
                className='text-primary underline text-base mr-1 cursor-pointer'
                onClick={() => setAddQuestion(true)}
              >
                Click Here
              </span>
              to Add Questions
            </h3>
          </div>
        )}
        <div className='flex-grow ml-4'>
          <EditDeleteQuestion />
        </div>
      </div>
    </div>
  );
};

export default BlankAddQuestions;
