import React, { useState } from 'react';
import User from './User';

import './Users.css';

export default function Users(props) {
  const {
    users,
    onUserSelect,
    selectedUser,
  } = props;
  const [ searchQuery, setSearchQuery ] = useState('');
  const filteredUsers = users.filter(user => {
    if (!searchQuery) {
      return true;
    }
    return user
      .from_name
      .toLowerCase()
      .indexOf(searchQuery.toLowerCase()) !== -1;
  });

  return (
    <div className="Users">
      <div className="Users__search">
        <input type="text"
          value={searchQuery}
          placeholder="search user"
          onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div className="Users__list">
        {filteredUsers.map((user, idx) => <User
          key={idx}
          {...user}
          selected={selectedUser === user.from_id}
          onUserSelect={() => onUserSelect(user.from_id)}
           />)
        }
      </div>
    </div>
  );
}
