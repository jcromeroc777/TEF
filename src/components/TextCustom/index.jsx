import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const TextCustom = ({
  control,
  name,
  label,
  margin,
  required = false,
  fullWidth = false,
  autofocus = false,
  rules,
  errors,
  type,
  InputProps,
  className,
  defaultValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          margin={margin}
          type={type}
          required={required}
          fullWidth={fullWidth}
          label={label}
          autoFocus={autofocus}
          InputProps={InputProps}
          className={className}
          error={errors[name] && !!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
      rules={rules}
    />
  );
};

export default TextCustom;
