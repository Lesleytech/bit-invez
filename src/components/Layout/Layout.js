import React from 'react';
import Navbar from '../Navbar/Navbar';

import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className='bitinvez__layout'>
      <Navbar />
      <div className='bitinvez__content'>{children}</div>
    </div>
  );
}
