// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null); // { role: 'elderly' | 'youth' }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate auth check (replace with real auth logic later)
  useEffect(() => {
    // Example: Check if user is logged in (e.g., from AsyncStorage or backend)
    const mockUser = { role: 'youth' }; // Change to 'youth' to test youth flow
    setUser(mockUser);
    setIsAuthenticated(true);
  }, []);

  return { 'youth', '' };
};