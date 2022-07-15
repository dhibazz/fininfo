import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
};
fetch('http://localhost:8080/api/auth/signin', requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    }
    );

};



const logout = () => {
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};