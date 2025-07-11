import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/flexStyles.css';

// @mui components :-
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import MUIBox from './MUIBox';
import MUITypography from './MUITypography';

const MUIBreadcrumbs = ({ breadcrumbs = [] }) => {
  const navigate = useNavigate();
  const handleNavigation = routePath => navigate(routePath);

  return (
    <BreadcrumbWrapper
      aria-label="breadcrumb"
      separator={
        <MUIBox className="flex-start-center" m={'0 4px'}>
          <NavigateNextIcon fontSize="small" />
        </MUIBox>
      }
    >
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast ? (
          <MUITypography key={index} variant="body2" color="#4E575F">
            {item.name}
          </MUITypography>
        ) : (
          <StyledLink key={index} onClick={() => handleNavigation(item.routePath)}>
            {item.name}
          </StyledLink>
        );
      })}
    </BreadcrumbWrapper>
  );
};

// PropTypes validations :-
MUIBreadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      routePath: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Styled Components :-
const BreadcrumbWrapper = styled(Breadcrumbs)(({ theme }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  color: '#4E575F',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

export default React.memo(MUIBreadcrumbs);
