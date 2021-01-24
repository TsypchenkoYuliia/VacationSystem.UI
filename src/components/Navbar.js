
import { useHistory } from 'react-router-dom';
import '../css/Navbar.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import { getUserById } from '../axios';
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
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/home');
                    }}>
                    <HomeIcon style={{ marginTop: '-4px' }}></HomeIcon>
                    Home
                </Button>

                <Button
                    className="requests_newreq-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '170px', minWidth: '140px', margin: '15px', border: '2px solid #188a05', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/newrequest');
                    }}>
                    <AddIcon></AddIcon>
            Vacation
        </Button>

                <Button
                    className="my-requests-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/requests');
                    }}>
                    <ListIcon></ListIcon>
            Vacations
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
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/reviews');
                    }}>
                    <ViewListIcon></ViewListIcon>
            Reviews
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/approved');
                    }}>
                    <ViewListIcon></ViewListIcon>
            Approved
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/rejected');
                    }}>
                    <ViewListIcon></ViewListIcon>
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
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/home');
                    }}>
                    <HomeIcon style={{ marginTop: '-4px' }}></HomeIcon>
                    Home
                </Button>

                <Button
                    className="requests_newreq-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #188a05', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/newrequest');
                    }}>
                    <AddIcon></AddIcon>
            Vacation
            </Button>

                <Button
                    className="my-requests-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #188a05', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/requests');
                    }}>
                    <ListIcon></ListIcon>
            Vacations
        </Button>
            </div>
            <div>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/reviews');
                    }}>
                    <ViewListIcon></ViewListIcon>
            Reviews
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/approved');
                    }}>
                    <ViewListIcon></ViewListIcon>
            Approved
        </Button>
                <Button
                    className="my-reviews-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #ec4c2c', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/rejected');
                    }}>
                    <ViewListIcon></ViewListIcon>
            Rejected
        </Button></div>

        </div>);
    }
    else if (role === "Admin") {
        return (<div className='navbar'>

            <div><Button
                className="requests_newreq-btn"
                variant="outlined"
                style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #188a05', color: '#188a05' }}
                onClick={() => {
                    history.replace('/newuser');
                }}>
                <AddIcon></AddIcon>
            New
        </Button>
                <Button
                    className="requests_newreq-btn"
                    variant="outlined"
                    style={{ height: '40px', width: '160px', minWidth: '140px', margin: '15px', border: '2px solid #188a05', color: '#188a05' }}
                    onClick={() => {
                        history.replace('/admin');
                    }}>
                    <ViewListIcon></ViewListIcon>
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