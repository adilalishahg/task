import { useState } from 'react';
import { addUser } from '../Service/api';
import { onSuccess, onError } from '../helpers/alert';

import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from '@mui/material';
// import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  username: '',
  email: '',
  password: '',
  city: '',
  buttonText: 'Register',

  error: '',
  success: '',
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { city, username, email, password, buttonText, error, success } = user;
  let navigate = useNavigate();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    setUser({ ...user, buttonText: 'Registering' });
    await addUser(user, setUser);
    // a();

    setUser({ ...user, buttonText: 'Registering' });

    // navigate('/all');
  };

  return (
    <Container>
      {success && onSuccess}
      {error && onError}
      <Typography variant="h4">Add User</Typography>

      <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="password"
          value={password}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">City</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="city"
          value={city}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addUserDetails()}
        >
          {buttonText}
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
