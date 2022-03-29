import React from 'react';
import Logo from '../assets/hatch_studio-logo.png';

export default function Header() {
  return (
    <div style={{padding: '20px'}}>
      <img src={Logo} alt="Hatch Logo" />
    </div>
  )
}
