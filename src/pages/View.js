

import RequestView from '../components/RequestView';
import { useEffect, useState } from 'react';
import { getRequest } from '../axios';

function View() {

    return <div className='content'>
        <div>
            <RequestView />
        </div>
    </div>;
}

export default View;