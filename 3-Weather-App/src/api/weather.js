
const BASE = 'https://api.openweathermap.org/data/2.5';

export async function fetchCurrentWeather(city, apiKey, signal) {
  const url = `${BASE}/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  const res = await fetch(url, { signal });

  if (!res.ok) {

    let message = res.statusText;
    try {
      const body = await res.json();
      message = body?.message || message;
    } catch {
        console.error();
    }
    
    throw new Error(message || 'Request failed');
  }

  return res.json();
}
