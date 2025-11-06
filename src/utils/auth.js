export const fakeLogin = (email, password) => {
  if (email === "luminarakash@gmail.com" && password === "12345") {
    const fakeToken = "fake-jwt-token-12345";
    localStorage.setItem("token", fakeToken);
    return true;
  }
  return false;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
