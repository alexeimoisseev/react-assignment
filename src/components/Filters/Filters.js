import React from 'react';
import classnames from 'classnames';

import './Filters.css';

export default function Filters(props) {
  const {
    acsending,
    setAcsending,
    searchQuery,
    setSearchQuery,
  } = props;

  return <div className="Filters">
    <div className="Filters__sorting">
      <div
        className={classnames({
          Filters__item: true,
          Filters__descending: true,
          Filters__selected: !acsending,
        })}
        onClick={(e) => setAcsending(false)}
        >
        Newest first
      </div>
      <div
        className={classnames({
          Filters__item: true,
          Filters__acsending: true,
          Filters__selected: acsending
        })}
        onClick={(e) => {setAcsending(true)}}
        >
        Oldest first
      </div>
    </div>
    <div className="Filters__query">
      <input type="text"
          value={searchQuery}
          placeholder="search post"
          onChange={(e) => setSearchQuery(e.target.value)} />

    </div>
  </div>;
}
