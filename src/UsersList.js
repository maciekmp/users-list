import React, { useState, useEffect } from 'react';

export const UsersList = () => {
  const [users, setUsers] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <h1>Users list</h1>
      <input
        autoFocus
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }} />
      <div />
      {!users && 'Loading...'}
      <ol>
        {users && users
          .filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
          .map(user => (
            <li>{user.name} <small>@{user.username}</small></li>
          ))}
      </ol>
    </>
  );
};
