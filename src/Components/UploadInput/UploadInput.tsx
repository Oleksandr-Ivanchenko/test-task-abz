import React, { ChangeEvent, FC } from 'react';
import { Button, FormControl, TextField } from "@mui/material";

export interface UploadInputProps {
  onSetFile: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: boolean;
  fileName: string;
  helperText: string;
  errorText: string;
}


export const UploadInput: FC<UploadInputProps> = ({
  onSetFile,
  error,
  fileName,
  helperText,
  errorText,
}: UploadInputProps) => {
  return (
    <FormControl>
      <label className={
        error
        ? "form__upload form__upload--error" 
        :  "form__upload"}
      >
        <TextField
          style={{ display: "none" }}
          type="file"
          className="form__input"
          onChange={onSetFile}
        />
        <Button
          sx={{
            color: 'hsla(0, 0%, 0%, 0.87)',
            background: 'transparent',
            width: '83px',
            fontFamily: 'Nunito',
            fontSize: '16px',
            height: '54px',
            border: error
              ? '1px solid #d32f2f'
              : '1px solid rgba(0, 0, 0, 0.87)',
            borderRadius: '4px 0px 0px 4px',
            zIndex: '0',
            textTransform: 'unset',
            position: 'relative',
            lineHeight: '26px',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
          }}
          variant="contained" 
          component="span"
        >
        Upload
        </Button>
        {fileName}
      </label>
      <span className={
        error
        ? "form__helper form__helper--error" 
        :  "form__helper"
      }>
        {error ? errorText : helperText}
      </span>
    </FormControl>
  );
};
