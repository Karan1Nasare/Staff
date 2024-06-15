import React, { useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { TiUserAdd } from 'react-icons/ti';
import { RiArrowDropDownLine, RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Cards from './cards';
import AddExamTab from './addExamTab';

const Question = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(null);
  const [isAddQuestionClicked, setisAddQuestionClicked] = useState(false);
  const navigate = useNavigate();

  const cards = [
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
      standard: '10th',
      subject: 'Gujarati',
    },
  ];
  const handleSearchClick = () => {
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredCards(filtered);
    if (filtered.length === 0) {
      setFilteredCards([]);
    }
  };
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const handleOnClick = () => {
    navigate('/examQuestionBank');
  };
  return (
    <>
      {!isAddQuestionClicked ? (
        <div className='mt-4 overflow-x-hidden'>
          <h1 className='text-3xl text-white text-left'>Exam</h1>
          <div className=' bg-secondary__fill my-6 border p-8 w-full 2xl:h-6.5 flex justify-between max-w-screen mx-auto border-gray-700 rounded-xl'>
            <div className='flex'>
              <input
                key={7}
                onKeyPress={handleSearchClick}
                onChange={handleInputChange}
                value={inputValue}
                className='p-2 w-80 h-11 bg-secondary__fill__dark rounded-md text-white text-sm'
                type='text'
                placeholder=' Search Name, Innrollment, Standard'
              />
            </div>
            <div className='flex'>
              <div className='flex w-44 bg-white h-11 text-sm rounded-md'>
                <span className='pt-[8%] pl-3 pr-1'>
                  <TiUserAdd />
                </span>
                <button onClick={handleOnClick}>Create Exam Paper</button>
              </div>
            </div>
          </div>
          <Cards cards={filteredCards || cards} />
        </div>
      ) : (
        <AddExamTab />
      )}
    </>
  );
};
export default Question;
