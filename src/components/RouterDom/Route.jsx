import React from 'react';

function Route({ path, element }) {
  

  return (
    <>
      {
        window.location.pathname === path && element
      }
    </>
  );
}

export default Route;