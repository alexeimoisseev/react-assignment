import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPosts } from '../../api/api';
import Posts from '../Posts/Posts';
import Users from '../Users/Users';

import './Reader.css';

function extractUsers(posts) {
  const users = posts
    .reduce((acc, post) => {
      const id = post.from_id
      acc[id] = acc[id] || {
        from_id: post.from_id,
        from_name: post.from_name,
        post_count: 0,
      };
      acc[id].post_count++;
      return acc;
    }, {});
  return Object.keys(users)
    .map(key => users[key])
    .sort((a, b) => a.from_name.localeCompare(b.from_name));
}

export default function Reader() {
  const [ posts, setPosts ] = useState([]);
  const [ users, setUsers ] = useState([]);

  const { selectedUser } = useParams();

  async function loadPosts() {
    const loadedPosts = await getPosts();
    const postData = loadedPosts.data;
    setPosts(postData.posts);
    setUsers(extractUsers(postData.posts));
  }

  useEffect(() => {
    loadPosts();
  }, [ ]);

  const displayedPosts = posts
    .filter(post =>
      !selectedUser || post.from_id === selectedUser
    );

  return <div className="Reader">
    <div className="Reader__body">
      <Users
        users={users}
        selectedUser={selectedUser}
        />
      <Posts posts={displayedPosts} />
    </div>
  </div>;
}
