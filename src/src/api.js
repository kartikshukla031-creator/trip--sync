const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function planTrip(payload) {
  const res = await fetch(API_BASE + '/api/plan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Request failed');
  }
  return res.json();
}
