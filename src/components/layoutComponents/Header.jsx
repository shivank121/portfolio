import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// Style
import '../../styles/flexStyles.css';
import { styled } from '@mui/material/styles';

// Mui Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useColorMode } from '../../contexts/ThemeProvider';

// Constants
import { headerMenuBar } from '../../configs/headerConfig';

const Header = () => {
  const { mode = 'light', toggleColorMode } = useColorMode();

  return (
    <>
      <RootBox>
        <Container className="flex-between">
          {/* Logo */}
          <IconButton
            component={RouterLink}
            to="/dashboard"
            sx={{ maxWidth: '50px', p: '0px', textDecoration: 'none' }}
          >
            <img
              src="assets/header/logo.avif"
              alt="logo"
              width={35}
              height={35}
              style={{ borderRadius: '50px' }}
            />
          </IconButton>

          {/* Tabs */}
          <Stack direction="row" gap={10} sx={{ padding: '0px 10px' }}>
            {headerMenuBar.map(({ id, name, path, icon }) => (
              <React.Fragment key={id}>
                <TabBox component={RouterLink} to={path}>
                  <Stack direction="row" alignItems={'center'} gap={1}>
                    {icon && <>{icon}</>}
                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>{name}</Typography>
                  </Stack>
                </TabBox>
              </React.Fragment>
            ))}
          </Stack>

          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          
        </Container>
      </RootBox>
    </>
  );
};

const RootBox = styled(Box)(({ theme }) => ({
  boxShadow: theme.palette.mode === 'dark' ? '0 2px 4px #FFFFFF1A' : '0 2px 4px #00000014',
  backgroundColor: theme.palette.background.default,
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(2),
}));

const TabBox = styled(Box)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
}));

export default Header;
