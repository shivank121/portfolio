import React from 'react';
import { Outlet } from 'react-router-dom';

// Common components :-
import { Container } from '../../components/commonComponents/commonMUIComponents';

// Layouts Components :-
import Header from '../../components/layoutComponents/Header';

const PublicLayoutContainer = () => {
  return (
    <>
      <header style={{ marginBottom: '10px' }}>
        <Header />
      </header>

      <main>
        <Container sx={{ height: 'calc(100vh - 70px)' }}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default PublicLayoutContainer;
