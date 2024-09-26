import axios from 'axios';

const accessAdmin = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8080/admin', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data); // Handle the response
  } catch (error) {
    console.error('Admin access failed', error);
  }
};

const accessUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8080/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data); // Handle the response
  } catch (error) {
    console.error('User access failed', error);
  }
};
