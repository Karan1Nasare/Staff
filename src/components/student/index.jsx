import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Cards from './components/cards';
import Header from './components/Header/Header';
// import Pagination from '../shared/Pagination/index';
// Make sure the path is correc
const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(null);
  const cards = [
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'namya Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
  ];
  const handleSearchClick = () => {
    // Implement filtering logic based on card names, enrollment, or standard
    const filtered = cards.filter(
      card =>
        card.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.enrollment.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.standard.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredCards(filtered);
    if (filtered.length === 0) {
      setFilteredCards([]);
    }
  };
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Header
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
      />
      <Cards cards={filteredCards || cards} />
      {/* <Pagination
        totalCards={searchTerm ? data.length : totalShowItems}
        cardsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </>
  );
};
export default Index;
