// const theme
export const components = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        padding: 8,
      },
    },
  },

  // --> Done
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.mode === 'dark' ? '#000' : '#FFFF',
          padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
          borderRadius: theme.shape.borderRadius(3),
          fontSize: theme.typography.h6,
          textTransform: 'capitalize',
        }),
    },
  },

  // --> Done
  MuiTextField: {
    defaultProps: { variant: 'outlined' },

    styleOverrides: {
      root: ({ theme }) =>
        theme.unstable_sx({
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',

            // Normal state
            '& fieldset': { borderColor: 'gray' },

            // Hover state
            '&:hover fieldset': { borderColor: 'gray' },

            // Focused state
            '&.Mui-focused fieldset': {
              borderColor: 'gray',
              borderWidth: 2,
            },

            // Error state (still green per request)
            '&.Mui-error fieldset': { borderColor: 'red' },

            // Disabled state
            '&.Mui-disabled': {},

            // Input styles to target inner text styles :-
            '& input': {},
            '& textarea': {},
          },

          // Label styling
          '& .MuiInputLabel-root': {
            fontWeight: 500,

            '&.Mui-focused': { fontWeight: 700 },
            '&.Mui-error': {},
          },

          // Helper text
          '& .MuiFormHelperText-root': {
            fontSize: 12,

            '&.Mui-error': { color: 'red' },
          },

          // Select dropdown icon (when using select)
          '& .MuiSelect-icon': { fontSize: '35px' },
        }),
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        backgroundColor: 'transparent',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
      input: {
        padding: '12px 14px',
      },
    },
  },

  MuiSelect: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
      select: {
        padding: '12px 14px',
      },
      icon: {
        right: 12,
      },
    },
  },

  MuiAutocomplete: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
      inputRoot: {
        borderRadius: 8,
        padding: '4px 12px !important',
      },
      paper: {
        borderRadius: 12,
      },
    },
  },

  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 16,
        padding: 16,
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },

  MuiToolbar: {
    styleOverrides: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
  },

  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRadius: 0,
      },
    },
  },

  MuiTable: {
    styleOverrides: {
      root: {
        borderCollapse: 'separate',
        borderSpacing: 0,
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: '12px 16px',
      },
      head: {
        fontWeight: 600,
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },

  MuiAvatar: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        marginBottom: 4,
      },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: 8,
        fontSize: '0.875rem',
      },
    },
  },

  MuiSkeleton: {
    styleOverrides: {
      root: {
        borderRadius: '8px !important',
        backgroundColor: 'rgb(80 54 54 / 11%) !important',
      },
    },
  },

  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        // Small screens and up (≥600px)
        [theme.breakpoints.up('sm')]: {
          paddingLeft: 20,
          paddingRight: 20,
        },

        // Medium screens and up (≥900px)
        [theme.breakpoints.up('md')]: {
          maxWidth: 960, // optional: match MUI default or customize
        },

        // Large screens and up (≥1200px)
        [theme.breakpoints.up('lg')]: {
          maxWidth: 1360,
        },
      }),
    },
  },
};
