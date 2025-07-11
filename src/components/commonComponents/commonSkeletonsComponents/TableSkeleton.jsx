import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Skeleton from '@mui/material/Skeleton';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

const TableSkeleton = ({ rows = 5, columns = 4 }) => (
  <TableContainer component={Paper} elevation={1} sx={{ borderRadius: 3 }}>
    <Table>
      <TableHead>
        <TableRow>
          {[...Array(columns)].map((_, index) => (
            <TableCell key={`head-${index}`} sx={{ py: 1.5 }}>
              <Skeleton
                variant="text"
                width="70%"
                height={30}
                sx={{ borderRadius: 1 }}
                animation="wave"
              />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {[...Array(rows)].map((_, rowIndex) => (
          <TableRow key={`row-${rowIndex}`}>
            {[...Array(columns)].map((_, colIndex) => (
              <TableCell key={`cell-${rowIndex}-${colIndex}`} sx={{ py: 1.5 }}>
                <Skeleton variant="text" height={20} sx={{ borderRadius: 1 }} animation="wave" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

TableSkeleton.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
};

export default TableSkeleton;
