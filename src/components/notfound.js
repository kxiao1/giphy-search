import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Notfound() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="center">
      <h1>Not found</h1>
      <Link to="/">Try logging in again. </Link>
    </div>
  );
}

export default Notfound;
