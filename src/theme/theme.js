import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';
import { components } from './components';

// Create Theme Object Generator :-
export const getTheme = (mode = 'light') =>
  createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography,
    components,
    spacing: factor => {
      const spacingMap = {
        1: '4px', // 4px
        2: '8px', // 8px
        3: '12px', // 12px
        4: '16px', // 16px
        5: '20px', // 20px
        6: '24px', // 24px
        7: '28px', // 28px
        8: '32px', // 32px
        9: '36px', // 36px
        10: '40px', // 40px
      };
      return spacingMap[factor] || '8px'; // Default to 8px if not specified
    },
    shape: {
      borderRadius: level => {
        const radiusMap = {
          1: '2px', // Extra small radius
          2: '4px', // Small radius
          3: '8px', // Medium radius
          4: '12px', // Large radius
          5: '16px', // Extra large radius
        };
        return radiusMap[level] || '4px'; // Default to 4px if not specified
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
    zIndex: {
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  });
