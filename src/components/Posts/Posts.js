import React, { useState } from 'react';
import moment from 'moment';

import Post from './Post';
import './Posts.css';
import Filters from '../Filters/Filters';

export default function Posts({ posts = [] }) {
  const [ acsending, setAcsending ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState('');

  const displayedPosts = posts
    .filter(post => {
      if (!searchQuery) {
        return true;
      }
      return post.message
        .toLowerCase()
        .indexOf(searchQuery.toLowerCase()) !== -1;
    })
    .sort((a, b) => {
      if (acsending) {
        return moment(a.created_time) - moment(b.created_time);
      }
      return moment(b.created_time) - moment(a.created_time);
    });

  return <div className="Posts">
    <div className="Posts__filters">
      <Filters
        acsending={acsending}
        setAcsending={setAcsending}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
         />
    </div>
    <div className="Posts__content">
      {displayedPosts.map(post => <Post {...post} key={post.id} />)}
    </div>
  </div>;
}
