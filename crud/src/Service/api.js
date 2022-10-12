import axios from 'axios';

import { onSuccess, onError } from '../helpers/alert';
const usersUrl = 'http://localhost:8000/api/register';
// import { API } from '../config';

export const getUsers = async (id) => {
  id = id || '';
  try {
    return await axios.get(`${usersUrl}/${id}`);
  } catch (error) {
    console.log('Error while calling getUsers api ', error);
  }
};

export const addUser = async (user, setUser) => {
  return await axios
    .post(`${usersUrl}`, user)
    .then((response) => onSuccess(response.message))
    .catch((error) => onError(error.message));
  //   setUser({ ...user, username: '', email: '', password: '', city: '' });
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};
