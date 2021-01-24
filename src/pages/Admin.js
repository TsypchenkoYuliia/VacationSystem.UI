import './../css/Home.css';
import AdminTable from './../components/AdminTable';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';


function AdminPage() {
    let history = useHistory();

    if (localStorage.getItem('role') !== "Admin")
        history.replace('/login');

    return <div><Navbar></Navbar><AdminTable></AdminTable></div>;
}

export default AdminPage;