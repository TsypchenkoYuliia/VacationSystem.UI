
import { useHistory } from 'react-router-dom';
import '../css/Navbar.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';


function Navbar() {

    let history = useHistory();

    let role = localStorage.getItem('role');

    if (localStorage.getItem('role') == "")
        history.replace('/login');

    if (role === "Employee") {
        return (<div className='navbar'>

            <div>
                <Button
                    className="my-requests-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '170px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/home');
                    }}>
                    <HomeIcon style={{ marginTop: '-4px', marginRight:'5px' }}></HomeIcon>
                    Home
                </Button>

                <Button
                    className="requests_newreq-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '170px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/newrequest');
                    }}>
                    <AddIcon style={{ marginRight:'5px' }}></AddIcon>
            Vacation
        </Button>
                <Button
                    className="my-requests-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '180px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/requests');
                    }}>
                    <ListIcon style={{ marginRight:'7px' }}></ListIcon>
                     My Vacations
        </Button>

            </div>


        </div>);
    }
    else if (role === "Accountant") {
        return (<div className='navbar'>

            <div>

                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/reviews');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}></ViewListIcon>
            Reviews
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/approved');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}> </ViewListIcon>
            Approved
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/rejected');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}></ViewListIcon>
            Rejected
        </Button></div>


        </div>);
    }
    else if (role === "Manager") {
        return (<div className='navbar'>

            <div>

                <Button
                    className="my-requests-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/home');
                    }}>
                    <HomeIcon style={{ marginTop: '-4px' }}></HomeIcon>
                    Home
                </Button>

                <Button
                    className="requests_newreq-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/newrequest');
                    }}>
                    <AddIcon style={{ marginRight:'5px' }}></AddIcon>
            Vacation
            </Button>

                <Button
                    className="my-requests-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '170px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/requests');
                    }}>
                    <ListIcon style={{ marginRight:'5px' }}></ListIcon>
                    My Vacations
        </Button>
            </div>
            <div>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#75E6DA', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/reviews');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}></ViewListIcon>
            Reviews
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#75E6DA', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/approved');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}></ViewListIcon>
            Approved
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#75E6DA', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/rejected');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}></ViewListIcon>
            Rejected
        </Button></div>

        </div>);
    }
    else if (role === "Admin") {
        return (<div className='navbar'>

            <div><Button
                className="requests_newreq-btn"
                variant="outlined"
                style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                onClick={() => {
                    history.replace('/newuser');
                }}>
                <AddIcon style={{ marginRight:'5px' }}></AddIcon>
            New
        </Button>
                <Button
                    className="requests_newreq-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #05445E', color: '#D4F1F4', backgroundColor:'#05445E' }}
                    onClick={() => {
                        history.replace('/admin');
                    }}>
                    <ViewListIcon style={{ marginRight:'5px' }}S></ViewListIcon>
            Users
        </Button>
            </div>


        </div>);
    }
    else {
        return null;
    }


}


export default Navbar;