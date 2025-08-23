// src/hooks/useWeather.js
import { useRef, useState, useCallback } from 'react';
import { fetchCurrentWeather } from '../api/weather';

export function useWeather(apiKey) {
  const [data, setData]   = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState(null);

  // Abort previous request if user triggers a new one fast
  const controllerRef = useRef(null);

  const getWeather = useCallback(async (city) => {
    const q = city?.trim();
    if (!q) return;

    // cancel previous pending request
    if (controllerRef.current) controllerRef.current.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setStatus('loading');
    setError(null);

    try {
      const json = await fetchCurrentWeather(q, apiKey, controller.signal);
      setData(json);
      setStatus('success');
    } catch (err) {
      if (err.name === 'AbortError') return; // user typed again; ignore
      setError(err.message || 'Something went wrong');
      setStatus('error');
    }
  }, [apiKey]);

  return { data, status, error, getWeather };
}
