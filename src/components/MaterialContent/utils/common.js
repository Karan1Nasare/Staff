import React from 'react';
import { videoState } from '../constant/defaultState';

const MaterialContentHelper = () => {
  const generateVideoCard = (cardSize) => Array(cardSize).fill(videoState);
  return { generateVideoCard };
};

export default MaterialContentHelper;
