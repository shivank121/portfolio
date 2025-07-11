import React, { createContext, useMemo, useState, useContext, useEffect } from 'react';

import { getTheme } from '../theme/theme';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { setToLocalStorage, getFromLocalStorage } from '../utils/localStorageUtils';

// ---------------------------------------------------------------------- //
const ColorModeContext = createContext();
export const useColorMode = () => useContext(ColorModeContext);

// --------------------------------------------------------------------- //
export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const muiModeKey = import.meta.env.MUI_MODE_KEY;

  // Load mode from localStorage on initial mount :-
  useEffect(() => {
    const savedMode = getFromLocalStorage(muiModeKey);
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Toggle theme and store it in localStorage :-
  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    setToLocalStorage(muiModeKey, newMode);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
