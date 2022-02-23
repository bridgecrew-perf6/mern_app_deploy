export const loginStart = () => ({
  type: 'LOGIN START',
});

export const loginSuccess = (user) => ({
  type: 'LOGIN SUCCESS',
  payload: user,
});

export const loginFailure = () => ({
  type: 'FAILURE',
});

// logout

export const logout = () => ({
  type: 'LOGOUT',
});
