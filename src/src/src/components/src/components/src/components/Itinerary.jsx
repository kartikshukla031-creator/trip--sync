import React from 'react';

export default function Itinerary({ result }) {
  if (!result) return null;
  const { itinerary, totalCost, remainingBudget, budget } = result;

  return (
    <div>
      <div className="card" style={{marginBottom:12}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <strong>Total budget:</strong> ₹{budget} <br />
            <strong>Planned cost:</strong> ₹{totalCost} <br />
            <span className="note">Remaining: ₹{remainingBudget}</span>
          </div>
          <div className="note">Generated itinerary</div>
      </div>
      </div>

      <div className="card">
        {itinerary.length === 0 && <div className="note">No attractions could be added within the budget.</div>}
        {itinerary.map((it, idx) => (
          <div key={it.id} className="itm">
            <div>
              <div style={{fontWeight:600}}>{idx+1}. {it.name}</div>
              <div className="note">Scheduled at {it.scheduledHour}:00 • duration {it.durationHours} hr</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontWeight:700}}>₹{it.price}</div>
              <div className="note">pop: {it.popularityAtScheduled ?? 'n/a'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
