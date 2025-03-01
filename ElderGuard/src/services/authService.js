import { useState, useEffect } from 'react';

// Dummy user data as a JS object
const dummyUsers = {
  elderly: {
    id: '1001',
    phone: '555-1234',
    role: 'elderly',
    trustedContacts: ['555-5678'], // Example trusted contact for alerts
  },
  youth: {
    id: '2001',
    phone: '555-5678',
    role: 'youth',
  },
};

export const useAuth = () => {
  const [user, setUser] = useState(null); // { role, id, phone, trustedContacts? }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking for an authenticated user on app start
    const checkAuth = async () => {
      // For demo purposes, we'll assume the user isn't logged in initially
      // You can pre-set a dummy user here for testing, e.g., setUser(dummyUsers.elderly)
    };
    checkAuth();
  }, []);

  const login = async (phone, role) => {
    // Simulate OTP verification by matching phone and role with dummy data
    let userData = null;
    if (role === 'elderly' && phone === dummyUsers.elderly.phone) {
      userData = dummyUsers.elderly;
    } else if (role === 'youth' && phone === dummyUsers.youth.phone) {
      userData = dummyUsers.youth;
    }

    if (userData) {
      // "Persist" the dummy user data (in memory for this demo)
      setUser(userData);
      setIsAuthenticated(true);
      console.log(`Logged in as ${role}: ${phone}`);
    } else {
      console.log('Login failed: Invalid phone or role');
    }
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    console.log('Logged out');
  };

  return { user, isAuthenticated, login, logout };
};