import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { getAllIcons } from './actions/getAllIcons';
const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allIcons, setAllIcons] = useState([]);
  const setDefaultValues = () => {
    console.log("setting")
    setUser(JSON.parse(localStorage.getItem('userInfo')));
    setAllIcons(JSON.parse(localStorage.getItem('allIcons')));
    setLoading(false);
    setError(null);
  };
  useEffect(() => {
    setDefaultValues();
  }, []);
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/users/login`,
        {
          email,
          password,
        }
      );

      //set to local storage if not already set
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      //get all icons while logging in and save it in local storage
      const icons = await getAllIcons();
      localStorage.setItem('allIcons', JSON.stringify(icons));
      //get the user info from local storage
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setAllIcons(JSON.parse(localStorage.getItem('allIcons')));
      setUser(userInfo);
      setLoading(false);
      setError(null);
    } catch (error) {
      let errorMessage = error.response.data.message || error.message;
      setLoading(false);
      setError(errorMessage);
    }
  };

  const registerUser = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/users/register`,
        {
          username,
          email,
          password,
        }
      );
      //login the user after registering
      loginUser(email, password);
    } catch (error) {
      let errorMessage = error.response.data.message || error.message;
      setLoading(false);
      setError(errorMessage);
    }
  };

  // update user info
  const updateUser = async (information) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/users/update`,
        information,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      //set to local storage if not already set
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      //get the user info from local storage
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setUser(userInfo);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
  };

  const getAlInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/users/getallinfo`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  const getUserInfo = async (username) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${NEXT_PUBLIC_BACKEND_URI}/api/users/getuserinfo/${username}`
      );
      //
      setLoading(false);
      setError(null);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  const value = {
    user,
    loginUser,
    logout,
    loading,
    error,
    allIcons,
    updateUser,
    registerUser,
    getUserInfo,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
