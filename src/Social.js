import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-child(1)': {
        backgroundColor: theme.palette.gold,
      },
    // '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    // },
  },
}))(TableRow);

function createData(rank, name, points) {
  return { rank, name, points };
}

const rows = [
  createData(1, 'John Doe', 334),
  createData(2, 'John Doe', 324),
  createData(3, 'John Doe', 314),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Social = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.rank}>
              {/* <StyledTableCell align="left">{row.rank}</StyledTableCell> */}

              <StyledTableCell component="th">
                {row.rank}
              </StyledTableCell> 

              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.points}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Social;