export const useMainToken = () => useState(() => []);
export const useToken = () => useState(() => []);
export const useAuth = () => useState(() => ({
  isAuthenticated: false
}));
export const useUserId = () => useState(() => ({
  UserId: null
}));
