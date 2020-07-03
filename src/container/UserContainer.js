import React, { useEffect, useState } from 'react';
import axios from 'axios';
import withLoading from '../HOC/withLoading';
import UserList from '../components/UserList';

const UserContainer = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const users = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(users.data);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      } catch (error) {
        alert('Error in Fetching data');
      }
    };
    getUser();
  }, []);
  return (
    <div>
      <UserList
        loading={loading}
        title={'Fetching data from server...!'}
        users={users}
      />
    </div>
  );
};

export default UserContainer;
