import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <Link to="/signup">
        Sign Up
      </Link>

      <span> OR </span>

      <Link to="/login">
        Log In
      </Link>
    </div>
  )
}

export default Welcome;
