import React, { useEffect, useState, FC } from 'react';
import { Dialog } from '@mui/material';
import { Button } from '../Button';
import './style.scss';
import { useSelector } from 'react-redux';
import { getError } from '../../store/selectors';



export const PopUp: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const errorMessage = useSelector(getError);

  useEffect(()=>{
    setOpen(errorMessage !== '')
  }, [errorMessage]);

  return (
    <Dialog open={open} onClose={handleClose} className='dialog'> 
      {errorMessage}
      <div className='dialog__button'>
        <Button onClick={handleClose} label="OK"/>
      </div>
    </Dialog>
  );
};
