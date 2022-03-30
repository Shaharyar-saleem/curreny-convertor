import React from 'react';
import Logo from '../assets/hatch_studio-logo.png';

export default function Header() {
  return (
    <div className="custom-container" style={{paddingTop: '40px'}}>
      <img src={Logo} alt="Hatch Logo" />
    </div>
  )
}
