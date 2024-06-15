import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../../App.css'; // Import the CSS file

function FilterPopup({ show, onClose, onFilter }) {
  const [selectedStandards, setSelectedStandards] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = (value, type) => {
    const updater = type === 'standard' ? setSelectedStandards : setSelectedDates;
    const selected = type === 'standard' ? selectedStandards : selectedDates;

    if (selected.includes(value)) {
      updater(selected.filter((button) => button !== value));
    } else {
      updater([...selected, value]);
    }
  };

  const handleReset = () => {
    setSelectedStandards([]);
    setSelectedDates([]);
  };

  const handleFilter = () => {
    onFilter(selectedStandards, selectedDates);
  };

  const buttonClasses = (value, type) => `py-2 px-4 rounded border ${
    (type === 'standard' && selectedStandards.includes(value))
      || (type === 'date' && selectedDates.includes(value))
      ? 'bg-white text-[#3B3E48] border-gray-700'
      : 'bg-transparent text-white border-gray-700'
  }`;

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="filter-dialog-title"
    >
      <div
        className={`bg-[#0B1739] rounded-lg p-8 relative ${
          isSmallScreen ? 'scrollable-popup' : ''
        }`}
        style={{ width: '90%', maxWidth: '673px' }}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-[#F49B36] text-2xl"
          aria-label="Close filter popup"
        >
          <IoCloseOutline size={24} />
        </button>
        <div>
          <h2
            id="filter-dialog-title"
            className="text-white text-xl mb-4 text-left ml-[30px]"
          >
            Filter
          </h2>
          <hr
            className="border-t border-white ml-[30px] w-[90%]"
            style={{ borderWidth: '0.5px' }}
          />
          <div className="text-white">
            <div className="mb-4 ml-[30px] text-left mt-4">
              <h3 className="mt-4">Standard</h3>
              <div className="flex gap-2 mt-4 flex-wrap">
                {['All', 'Std-7', 'Std-8', 'Std-9', 'Std-10', 'Std-12'].map(
                  (standard) => (
                    <button
                      key={standard}
                      className={buttonClasses(standard, 'standard')}
                      onClick={() => handleButtonClick(standard, 'standard')}
                      aria-pressed={selectedStandards.includes(standard)}
                    >
                      {standard}
                    </button>
                  ),
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-4 ml-[30px] text-left mt-4">Select Date</h3>
              <div className="flex gap-2 mb-4 ml-[30px] text-left mt-4 flex-wrap">
                {[
                  'Today',
                  'This Week',
                  'This Month',
                  'This Year',
                  'Custom Date',
                ].map((date) => (
                  <button
                    key={date}
                    className={buttonClasses(date, 'date')}
                    onClick={() => handleButtonClick(date, 'date')}
                    aria-pressed={selectedDates.includes(date)}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <Calendar className="bg-[#081028] text-white p-4 rounded-lg centered-calendar block mx-auto mt-4 ml-[30px]" />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              className="bg-[#333B4F] text-white py-2 px-4 rounded"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="bg-[#F49B36] text-black py-2 px-4 rounded"
              onClick={handleFilter}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPopup;
