import React from 'react';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <div role="main">
      {children}
    </div>
  )
}

export default Layout;