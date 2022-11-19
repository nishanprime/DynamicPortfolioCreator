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
        `${process.env.BACKEND_URI}/users/login`,
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

  // update user info
  const updateUser = async (information) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${process.env.BACKEND_URI}/users/update`,
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
        `${process.env.BACKEND_URI}/users/getallinfo`,
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

  const value = {
    user,
    loginUser,
    logout,
    loading,
    error,
    allIcons,
    updateUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
