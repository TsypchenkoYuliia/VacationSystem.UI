import React from 'react';
import { getUser } from '../axios';
import { useEffect, useState } from 'react';


const ReviewerName = function ReviewerName(props)
{
    let [user, setUser] = useState({});

    useEffect(() => {
        async function getAllData() {
          await getUser(localStorage.getItem('employee')).then(({ data }) => {
            setUser(data);
          });
        }
        getAllData();
      }, []);

    return <div>{user.firstName}{user.lastName}{props.state}{props.comment}</div>;
}

export default ReviewerName;