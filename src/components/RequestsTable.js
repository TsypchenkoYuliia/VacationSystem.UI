import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button  from '@material-ui/core/Button';
import '../css/Table.css';
import { useEffect, useState} from 'react';
import {getMyRequests} from '../axios';
import {actionReview} from '../axios';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'id', numeric: false, disablePadding: false, label: 'Number' },
  { id: 'state', numeric: false, disablePadding: false, label: 'State'},
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'start', numeric: false, disablePadding: false, label: 'Start date' },
  { id: 'end', numeric: false, disablePadding: false, label: 'End date' },
  { id: 'comment', numeric: false, disablePadding: false, label: 'Comment' },
  { id: 'details', numeric: false, disablePadding: false, label: 'State details' },
  { id: 'action', numeric: false, disablePadding: false },
];



function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  
  

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{background:'#ec4c2c', color:'#E7DFDD', fontWeight:'bold'}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    (<div></div>)
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'auto',
    width: '93%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  cell:{
    backgroundcolor:'red',
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = requests.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  let [requests, setRequests] = useState([]);
  

  useEffect(() => {
    async function getAllData() {
      await getMyRequests().then(({ data }) => {
        setRequests(data); 

        });
    }
   getAllData();
  }, []);

  
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, requests.length - page * rowsPerPage);
  let history = useHistory();

  function action(request)
  {
    localStorage.setItem('request', request.id);
    history.replace('/view');
  }

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}
      style={{background:'#188a05'}}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            style={{background:'#E7DFDD'}}
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={requests.length}
              
            />
            <TableBody>
              {stableSort(requests, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((request, index) => {
                  const isItemSelected = isSelected(request.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  let typeStr = "";
                 
                  if(request.type==1)
                    typeStr = 'Administrative'
                  if(request.type==2)
                    typeStr = 'Annual'
                  if(request.type==3)
                    typeStr = 'Study'
                  if(request.type==4)
                    typeStr = 'Sick'

                    let stateStr = "";
                 
                  if(request.state==1)
                    stateStr = 'New'
                  if(request.state==2)
                    stateStr = 'In Progress'
                  if(request.state==3)
                    stateStr = 'Approved'
                  if(request.state==4)
                    stateStr = 'Rejected'

                  return (

                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, request.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={request.id}
                      selected={isItemSelected}
                    >
                      
                      <TableCell align="center" component="th" id={labelId}  padding="none">{request.id}</TableCell>
                      <TableCell align="center">{stateStr}</TableCell>
                      <TableCell align="center" >{typeStr}</TableCell>
                      <TableCell align="center" ><Moment format="DD/MM/YYYY">{request.startDate}</Moment></TableCell>
                      <TableCell align="center"><Moment format="DD/MM/YYYY">{request.endDate}</Moment></TableCell>
                      <TableCell align="center" >{request.comment}</TableCell>
                      <TableCell align="center" >{request.reviews.map((item)=>{
                        return item.comment;
                      })}</TableCell>
                      <TableCell align="center">
                        <Button
                        onClick={() => action(request)}
                        style={{margin:'15px', height:'40px', wight:'40px', color:'#E7DFDD', background:'#188a05'}}
                        >View</Button>
                        </TableCell>                     
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 13 : 53) * emptyRows}}>
                  
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={requests.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}

