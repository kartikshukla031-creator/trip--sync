import React, { useState } from 'react';
import Header from './components/Header';
import PlanForm from './components/PlanForm';
import Itinerary from './components/Itinerary';
import { planTrip } from './api';

export default function App(){
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const onPlan = async (payload) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await planTrip(payload);
      setResult(res);
    } catch (err) {
      setError(err.message || 'Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <PlanForm onPlan={onPlan} loading={loading} />
      {error && <div className="card" style={{marginBottom:12,color:'red'}}>{error}</div>}
      <Itinerary result={result} />
      <div style={{marginTop:12}} className="note">This is an MVP with mock data. Replace the backend DB or API keys to use real attractions/prices.</div>
    </div>
  );
}
