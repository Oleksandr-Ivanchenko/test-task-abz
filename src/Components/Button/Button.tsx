import React, { FC, MouseEventHandler } from 'react';
import { styled } from '@mui/material/styles';
import { ButtonProps as MaterialButtonProps } from '@mui/material/Button';
import { Button as MaterialButton } from '@mui/material';
import './style.scss';

const StyledButton = styled(MaterialButton)<MaterialButtonProps>(() => ({
  backgroundColor: '#f4e041',
  borderRadius: '80px',
  fontFamily: 'Nunito',
  fontSize: '16px',
  lineHeight: '26px',
  minWidth: '100px',
  boxShadow: 'unset',
  color: 'rgba(0, 0, 0, 0.87)',
  textTransform: 'unset',
  '&:hover': {
    backgroundColor: '#ffe302',
    boxShadow: 'unset',
  },
  '&:disabled': {
    backgroundColor: 'b4b4b4',
    color: '#fff',
  }
}));

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  width?: string;
}

export const Button: FC<ButtonProps> = ({ 
  label, 
  disabled,
  onClick,
  width,
}: ButtonProps) => {
  return (
    <StyledButton 
      variant="contained" 
      id="button"
      disabled={disabled}
      onClick={onClick}
      sx={{
        width: width || '100px',
      }}
    >
      { label }
    </StyledButton>
  );
};
