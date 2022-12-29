import React from 'react';

export default function Main({ children } : any) {
  return (
    <div className="main">
      <div className="container">
        { children }
      </div>
    </div>
  )
}
