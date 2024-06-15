import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { RHFSelect } from '../../../hooks/hook-form/RHFSelect';
import SelectAdminDialog from './dialog/selectAdmin';
import useAddNotification from '../hooks/useAddNotification';
import SelectAdminCard from './selectedAdminCard';

const Header = () => {
  const {
    data,
    isEditOpen,
    hasCheckedAdmins,
    searchInputValue,
    selectAllAdmin,
    openAdminDialog,
    closeAdminDialog,
    handleSearchClick,
    handleSearchInputChange,
  } = useAddNotification();

  const methods = useForm({
    defaultValues: {
      admin: '', // Initial value for the select field
    },
  });

  const options = [
    { value: 'admin1', label: 'Admin 1' },
    { value: 'admin2', label: 'Admin 2' },
    { value: 'admin3', label: 'Admin 3' },
  ]; // Replace with actual options

  return (
    <FormProvider {...methods}>
      {!hasCheckedAdmins ? (
        <div className='select mt-6'>
          <div className='flex justify-end items-center space-x-4'>
            <div className='border rounded-md text-white border-gray-700 border-solid bg-secondary__fill h-11 w-44'>
              <RHFSelect
                name='admin'
                label=''
                options={options}
                placeholder='Select an Admin'
                sx={{
                  height: '100%',
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent',
                  },
                  '.MuiSelect-select': {
                    height: '100%',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                  },
                  '.MuiSvgIcon-root': {
                    color: 'white',
                  },
                }}
              />
            </div>

            <button
              onClick={openAdminDialog}
              className='bg-white w-28 rounded-md p-1 h-10 text-sm'
            >
              Select Admin
            </button>
          </div>
          <SelectAdminDialog
            data={data}
            isOpen={isEditOpen}
            searchInputValue={searchInputValue}
            onClose={closeAdminDialog}
            selectAllAdmin={selectAllAdmin}
            handleSearchClick={handleSearchClick}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
      ) : (
        <div className='overflow-x-hidden'>
          <div className='w-screen overflow-x-scroll'>
            <div className='w-[120%] flex'>
              <SelectAdminCard />
            </div>
          </div>
        </div>
      )}
    </FormProvider>
  );
};

export default Header;
