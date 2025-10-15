import React, { useState } from 'react';

export default function PlanForm({ onPlan, loading }) {
  const [destination, setDestination] = useState('delhi');
  const [budget, setBudget] = useState(2000);
  const [startHour, setStartHour] = useState(9);

  const submit = (e) => {
    e.preventDefault();
    onPlan({ destination, budget: Number(budget), startHour: Number(startHour) });
  };

  return (
    <form onSubmit={submit} className="card" style={{marginBottom:12}}>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <div style={{flex:'1 1 180px'}}>
          <label className="note">Destination</label>
          <select value={destination} onChange={e=>setDestination(e.target.value)} className="input" >
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="jaipur">Jaipur</option>
          </select>
        </div>

        <div style={{flex:'1 1 160px'}}>
          <label className="note">Budget (₹)</label>
          <input type="number" min="0" className="input" value={budget} onChange={e=>setBudget(e.target.value)} />
        </div>

        <div style={{flex:'1 1 120px'}}>
          <label className="note">Start hour</label>
          <select value={startHour} onChange={e=>setStartHour(e.target.value)} className="input">
            {Array.from({length:12}).map((_,i)=>{
              const h = 8 + i; return <option key={h} value={h}>{h}:00</option>;
            })}
          </select>
        </div>

        <div style={{alignSelf:'end'}}>
          <button className="btn" disabled={loading}>{loading ? 'Planning...' : 'Plan my trip'}</button>
        </div>
      </div>
    </form>
  );
}
