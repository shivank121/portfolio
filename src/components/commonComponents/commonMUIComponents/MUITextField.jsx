import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

// MUI Components
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// MUI Icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

const MUITextField = props => {
  // Props destructuring :-
  const {
    name = '',
    control,
    label = '',
    helperText = '',

    size = 'small',
    fieldType = 'text',
    variant = 'outlined',

    endIcon = null,
    startIcon = null,

    select = false,
    showPasswordToggle = false,

    sx = {},
    labelSx = {},
    selectOptions = [],

    ...restProps
  } = props;

  //---------------------------------------------------------------//
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          {...field}
          size={size}
          label={label}
          sx={{ ...sx }}
          {...restProps}
          select={select}
          error={!!error}
          variant={variant}
          helperText={error ? error.message : helperText}
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : fieldType}
          InputLabelProps={{ sx: { ...labelSx } }}
          InputProps={{
            startAdornment: startIcon && (
              <InputAdornment position="start">
                <IconButton edge="start" disabled>
                  {startIcon}
                </IconButton>
              </InputAdornment>
            ),

            endAdornment: (
              <>
                {showPasswordToggle ? (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 23, marginRight: '7px' }} />
                      ) : (
                        <Visibility sx={{ fontSize: 23, marginRight: '7px' }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  endIcon && (
                    <InputAdornment position="end">
                      <IconButton edge="end" disabled>
                        {endIcon}
                      </IconButton>
                    </InputAdornment>
                  )
                )}
              </>
            ),
          }}
        >
          {select &&
            selectOptions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
};

//--------- Props Type safety ------------ //
MUITextField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  fieldType: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  select: PropTypes.bool,
  selectOptions: PropTypes.array,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  showPasswordToggle: PropTypes.bool,
  helperText: PropTypes.string,
  sx: PropTypes.object,
  labelSx: PropTypes.object,
};

export default MUITextField;
