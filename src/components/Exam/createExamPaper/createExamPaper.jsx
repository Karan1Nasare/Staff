import React, { useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoFilterOutline } from 'react-icons/io5';
import selectQuestion from '../../../assets/selectQuestion.svg';

const CreateExamPaper = () => {
  const selectedQuestions = [
    {
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      mark: '3 Mark',
    },
    {
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      mark: '3 Mark',
    },
    {
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      mark: '3 Mark',
    },
  ];
  const questions = [
    {
      mark: '2 Mark',
      type: 'MCQ',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
    {
      mark: '2 Mark',
      type: 'MCQ',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
    {
      mark: '2 Mark',
      type: 'MCQ',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
    {
      mark: '2 Mark',
      type: 'MCQ',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
    {
      mark: '2 Mark',
      type: 'MCQ',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
    {
      mark: '2 Mark',
      type: 'MCQ',
      questionNo: '1.',
      question: 'In parallel combination of resistances, the voltage is ?',
      option1: 'lower across largest resistance',
      option2: 'higher across largest resistance ',
      option3: 'same across each resistance ',
      option4: 'higher across smaller resistance',
    },
  ];

  const [checkBoxStates, setCheckBoxStates] = useState(
    questions.map(() => false),
  );
  const [optionCheckBoxStates, setOptionCheckBoxStates] = useState(
    questions.map(() => [false, false, false, false]),
  );

  const handleQuestionChange = index => {
    setCheckBoxStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state)),
    );
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    setOptionCheckBoxStates(prevStates =>
      prevStates.map((options, qIndex) =>
        qIndex === questionIndex
          ? options.map((option, oIndex) =>
              oIndex === optionIndex ? !option : option,
            )
          : options,
      ),
    );
  };

  return (
    <div className='flex'>
      <div className=' overflow-x-hidden w-5/12 overflow-y-scroll  h-screen '>
        {questions.map((question, questionIndex) => (
          <div
            className='p-7 text-base rounded-xl border mb-4 border-gray-700 bg-secondary__fill h-auto'
            key={questionIndex}
          >
            <div className='flex justify-between'>
              <div className='flex'>
                <h1 className='text-left text-base text-primary'>
                  {question.mark}
                </h1>
                <h2 className='rounded-full ml-2 w-14 text-xs pt-1 bg-tealGreen__opacity text-tealGreen'>
                  {question.type}
                </h2>
              </div>
              <label className='relative inline-flex items-center cursor-pointer'>
                <input
                  type='checkbox'
                  className='sr-only peer'
                  checked={checkBoxStates[questionIndex]}
                  onChange={() => handleQuestionChange(questionIndex)}
                />
                <div
                  className={`w-5 h-5 border border-zinc-400 rounded-sm ${checkBoxStates[questionIndex] ? 'bg-yellow-500' : 'bg-transparent'} peer-checked:bg-yellow-500 flex justify-center items-center`}
                >
                  {checkBoxStates[questionIndex] && (
                    <div className='w-3 h-3 bg-white rounded-full flex items-center justify-center'>
                      <div className='w-2 h-2 bg-transparent rounded-full border-2 border-white'></div>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className='flex text-white my-6'>
              <h3 className='text-xl mr-3 mt-2'>{question.questionNo}</h3>
              <div className='w-29.6 h-2.6 px-3 rounded border bg-blue border-gray-700 justify-start items-center gap-4 inline-flex'>
                <h2 className='text-white md:text-xs text-sm font-normal'>
                  {question.question}
                </h2>
              </div>
            </div>
            <h2 className='text-white text-left mb-6 text-base'>Options</h2>
            {[
              question.option1,
              question.option2,
              question.option3,
              question.option4,
            ].map((option, optionIndex) => (
              <div key={optionIndex} className='flex mb-4'>
                <label className='relative inline-flex items-center cursor-pointer mr-6 mt-3'>
                  <input
                    type='checkbox'
                    className='sr-only peer'
                    checked={optionCheckBoxStates[questionIndex][optionIndex]}
                    onChange={() =>
                      handleOptionChange(questionIndex, optionIndex)
                    }
                  />
                  <div
                    className={`w-5 h-5 border border-zinc-400 rounded-sm ${optionCheckBoxStates[questionIndex][optionIndex] ? 'bg-yellow-500' : 'bg-transparent'} peer-checked:bg-yellow-500 flex justify-center items-center`}
                  >
                    {optionCheckBoxStates[questionIndex][optionIndex] && (
                      <div className='w-3 h-3 bg-white rounded-full flex items-center justify-center'>
                        <div className='w-2 h-2 bg-transparent rounded-full border-2 border-white'></div>
                      </div>
                    )}
                  </div>
                </label>
                <div className='w-28.8 h-2.6 px-3 rounded border border-gray-700 bg-blue justify-start items-center gap-4 inline-flex'>
                  <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
                    <div className="text-white text-sm font-normal font-['Helvetica']">
                      {option}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='bg-secondary__fill 2xl:w-5/12 p-7 md:w-6/12 h-[46%] rounded-xl border ml-8 border-gray-700 '>
        <div className='flex text-lg justify-between'>
          <h2 className='text-white'>Selected Questions</h2>
          <div className='flex text-primary'>
            <span className='mt-1 mr-2'>
              <IoMdAddCircleOutline />
            </span>
            <h2 className='text-lg'>Add Questions</h2>
          </div>
        </div>
        {selectedQuestions.map((selectedQue, index) => (
          <div key={index} className='flex pt-4 justify-between'>
            <img className='text-white' src={selectQuestion} alt='' />
            <div className='flex ml-6 pt-2'>
              <h2 className='text-white md:text-xs'>
                {selectedQue.questionNo}
              </h2>
              <h3 className='text-white md:text-xs text-left text-base'>
                {selectedQue.question}
              </h3>
            </div>
            <div className='flex py-3 ml-3'>
              <h2 className='flex w-16 text-sm bg-primary rounded-full mr-2 justify-center h-5 bg-opacity-20 text-primary'>
                {selectedQue.mark}
              </h2>
              <span className=' text-red-600 mr-2'>
                <RiDeleteBin5Fill style={{ fontSize: '1.3em' }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateExamPaper;
