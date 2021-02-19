import React from 'react';
import footer from '../assets/dashboard-footer.svg';

export default function DashFooter() {
  return (
    <div class="p-0">
      <img
        style={{ width: '110%', height: '28vw' }}
        src={footer}
        alt="footer"
      />
    </div>
  );
}
