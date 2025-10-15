import React from 'react';
export default function Header(){
  return (
    <div className="header">
      <div>
        <h1 style={{margin:0}}>Trip Sync</h1>
        <div className="note">One input → optimized itinerary within your budget</div>
      </div>
      <div>
        <a className="note" href="#" target="_blank" rel="noreferrer">Docs</a>
      </div>
    </div>
  );
}
