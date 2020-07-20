import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './Post.css';

export default function Post({ from_name, from_id, message, created_time }) {
  return <div className="Post">
    <div className="Post__header">
      <div className="Post__fromName">
        by <Link to={`/${from_id}`}><b>{from_name}</b></Link>
      </div>
      <div className="Post__createdTime">
        {moment(created_time).format('MMMM D, YYYY, hh:mm:ss')}
      </div>
    </div>
    <div className="Post__message">
      {message}
    </div>
  </div>;
}
