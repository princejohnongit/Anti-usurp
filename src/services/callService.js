import { api } from './api';

export const callService = {
  checkCall: async () => {
    try {
    //   const response = await api.post('/check-call', { /* call data */ });
      return 'sucecss' ;//response.data.status; // e.g., "Safe" or "Potential Scam"
    } catch (error) {
      return 'Error checking call';
    }
  },
};