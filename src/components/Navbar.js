
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../css/Navbar.css';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ViewListIcon from '@material-ui/icons/ViewList';

function Navbar (){

    let history = useHistory();


    return (<div className='navbar'>
        <Button
            className="requests_newreq-btn"
            variant="outlined"
            style={{ height: '40px', width: '170px', minWidth: '140px', margin:'15px', border:'2px solid #188a05', color:'#188a05' }}
            onClick={() => {
                history.replace('/newrequest');
            }}>
                <AddIcon></AddIcon>
            Vacation
        </Button>
        <Button
            className="my-requests-btn"
            variant="outlined"
            style={{ height: '40px', width: '160px', minWidth: '140px', margin:'15px', border:'2px solid #ec4c2c', color:'#188a05' }}
            onClick={() => {
                history.replace('/requests');
            }}>
                <ListIcon></ListIcon>
            Vacations
        </Button>
        <Button
            className="my-reviews-btn"
            variant="outlined"
            style={{ height: '40px', width: '160px', minWidth: '140px', margin:'15px', border:'2px solid #ec4c2c', color:'#188a05' }}
            onClick={() => {
                history.replace('/reviews');
            }}>
                <ViewListIcon></ViewListIcon>
            Reviews
        </Button>
    </div>);
}


export default Navbar;