import React, { useEffect, useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import RichTextEditor from '../../shared/RichTextEditor';
import { useStore } from '../../../store/context-store';
import ArrowRight from '../../../assets/icon/Group 38.svg';
import Dropdown from '../../shared/DropDown';

const AddExamBasicDetails = () => {
  const navigate = useNavigate();
  const [Store, StoreDispatch] = useStore();
  const standardOptions = [
    'Standard 1',
    'Standard 1',
    'Standard 1',
    'Standard 1',
  ];
  const [selectStandardOption, setSelectStandardOption] =
    useState('Select Standard');

  const subjectOptions = ['Subject 1', 'Subject ', 'Subject ', 'Subject '];
  const [selectSubjectOption, setSelectSubjectOption] =
    useState('Select Subject');

  const chapterOptions = ['Chapter 1', 'Chapter 1', 'Chapter 1', 'Chapter 1'];
  const [selectChapterOption, setSelectChapterOption] =
    useState('Select Chapter');

  const topicOptions = ['Topic 1', 'Topic 1', 'Topic 1', 'Topic 1'];
  const [selectTopicOption, setSelectTopicOption] = useState('Select Topic');

  const [questionBankData, setQuestionBankData] = useState(
    {
      title: '',
      description: '',
      standard: '',
      subject: '',
      chapter: '',
      topic: '',
    } || {},
  );
  const handleChange = e => {
    const { name, value } = e.target;
    setQuestionBankData({
      ...questionBankData,
      [name]: value,
    });
    if (questionBankData) {
      StoreDispatch({
        type: 'ADD_QUESTION_BANK',
        payload: questionBankData,
      });
    }
  };
  const handleBackClick = () => {
    navigate('/createExamPaper');
  };
  // useEffect(() => {
  //   const { title, description, standard, subject, chapter, topic } =
  //     questionBankData;
  //   StoreDispatch({
  //     type: 'ADD_QUESTION_BANK',
  //     payload: { title, description, standard, subject, chapter, topic },
  //   });
  // }, []);
  return (
    <div className='w-full max-w-screen mx-auto'>
      <div className='flex mr-6 justify-between'>
        <div className='flex text-white'>
          <div className='border-r border-2 border-primary mr-2 h-7' />
          <h1 className='text-lg text-white text-left'>Create Exam Paper</h1>
        </div>
        <div className='flex'>
          <div className='flex w-16 mr-8 bg-white h-11 justify-center rounded-md'>
            <button>Save</button>
          </div>
          <div onClick={handleBackClick} className='flex text-white'>
            <img
              src={ArrowRight}
              style={{
                marginRight: '0.5rem',
              }}
            ></img>
            <h2 className='mt-2 text-lg'>Back</h2>
          </div>
        </div>
      </div>
      <div className='text-white'>
        <div className='p-8 rounded-md mt-6 border border-gray-700 h-[70%] w-full max-w-screen mx-auto bg-secondary__fill'>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mb-2 text-left'>Select Standard</h1>
              <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
                <Dropdown
                  options={standardOptions}
                  selectedOption={selectStandardOption}
                  setSelectedOption={setSelectStandardOption}
                />
              </div>
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mb-2 text-left'>Select Subject</h1>
              <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
                <Dropdown
                  options={standardOptions}
                  selectedOption={selectStandardOption}
                  setSelectedOption={setSelectStandardOption}
                />
              </div>
            </div>
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>Exam Paper Name</h1>
              <input
                className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                type='text'
                placeholder='  Enter Exam Title'
              />
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>Total Mark</h1>
              <input
                className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                type='text'
                placeholder='  Enter Exam Title'
              />
            </div>
          </div>
          <h3 className='mt-6 mb-2 text-left'>Description</h3>
          <div className=' border rounded-md w-full max-w-screen mx-auto border-gray-700'>
            <RichTextEditor />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddExamBasicDetails;
