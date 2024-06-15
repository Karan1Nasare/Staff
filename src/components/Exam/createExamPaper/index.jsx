import React from 'react';
import CreateExamPaper from './createExamPaper';
import Header from './header';

const index = ({ setNextClick }) => {
  return (
    <div>
      <Header setNextClick={setNextClick} />
      <CreateExamPaper />
    </div>
  );
};

export default index;
