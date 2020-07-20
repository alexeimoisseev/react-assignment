import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './User.css';

export default function User(props) {
  const {
    from_id,
    from_name,
    post_count,
    selected,
  } = props;

  const className = classnames({
    User: true,
    User__selected: selected
  });
  const to = selected ? '/' : `/${from_id}`;

  return <div className={className}>
    <Link to={to}>
      <div className="User__name">
        {from_name}
      </div>
      <div className="User__count">
        {post_count}
      </div>
    </Link>
  </div>;
}
