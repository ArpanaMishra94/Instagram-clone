import * as React from 'react';
import Timeline from './Timeline/Timeline';
import Sidebar from './Sidebar/Sidebar';
import './Footer.css';

export default function CSSGrid() {
  return (
    <div className = "footer">
            <Timeline className = "footer__timeline"/>
            <Sidebar className = "footer__sidebar"/>
    </div>
  );
}
