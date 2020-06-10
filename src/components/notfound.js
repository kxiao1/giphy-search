import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div className="header">
      <h1>Not found</h1>
      <div>
        <Link to="/">Try logging in again. </Link>
      </div>
    </div>
  );
}

export default Notfound;
