import UserEdit from '../components/UserEdit';
import { useHistory } from 'react-router-dom';

function View() {

    let history = useHistory();

    if (localStorage.getItem('role') !== "Admin")
        history.replace('/login');

    return <div className='content'>
        <div>
            <UserEdit />
        </div>
    </div>;
}

export default View;