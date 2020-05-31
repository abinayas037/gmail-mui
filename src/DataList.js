import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  icon: {
    align: "center",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(title, description, time) {
  return { title, description, time };
}

const rows = [
  createData('The Hustle', 'welcome to the Hustle news which will give all updates', '7.37 PM'),
  createData('Indeed', 'Hey therez! got a lots of opportunity for you enroll and rock', '8.20 AM'),
  createData('Morning Brew', 'Cyprus Unveils a very unique way to attract tourists', '9.45 PM'),
  createData('Zomato', 'Hello Foodie! Hope you are doing good stay safe and order your favourite food', '8.20 PM'),
  createData('Coursera', 'Dear Learner! Got new courses for you have a safe learning experience with us', '6.55 PM'),
  createData('The Hustle', 'welcome to the Hustle news which will give all updates', '7.37 PM'),
  createData('Indeed', 'Hey therez! got a lots of opportunity for you enroll and rock', '8.20 AM'),
  createData('Morning Brew', 'Cyprus Unveils a very unique way to attract tourists', '9.45 PM'),
  createData('Zomato', 'Hello Foodie! Hope you are doing good stay safe and order your favourite food', '8.20 PM'),
  createData('Coursera', 'Dear Learner! Got new courses for you have a safe learning experience with us', '6.55 PM'),
  createData('The Hustle', 'welcome to the Hustle news which will give all updates', '7.37 PM'),
  createData('Indeed', 'Hey therez! got a lots of opportunity for you enroll and rock', '8.20 AM'),
  createData('Morning Brew', 'Cyprus Unveils a very unique way to attract tourists', '9.45 PM'),
  createData('Zomato', 'Hello Foodie! Hope you are doing good stay safe and order your favourite food', '8.20 PM'),
  createData('Coursera', 'Dear Learner! Got new courses for you have a safe learning experience with us', '6.55 PM'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row" className={classes.icon}>
                 
                  <CheckBoxOutlineBlankOutlinedIcon size="small"/>
                  <StarBorderIcon />
                  <LabelImportantTwoToneIcon/>
              </TableCell>
              <TableCell  >
                {row.title}
              </TableCell>
              <TableCell  align="left">
                {row.description}
              </TableCell>
              <TableCell  align="right">
                {row.time}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              align={"center"}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
