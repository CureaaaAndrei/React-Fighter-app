import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './Login.modules.css';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const paperStyle = { padding: 20, height: '50vh', width: 380, margin: '150px auto' };
  const avatarStyle = { backgroundColor: "#5cc55a" };
  const btnStyle = { margin: '8px 0' };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    try {
      const user = login(username, password);
      // Autentificarea a avut succes, redirecționează către pagina Card.
      navigate('/Card');
    } catch (error) {
      
      setError('Invalid username or password'); // Setează mesajul de eroare în starea componentei
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Paper elevation={10} style={paperStyle} >
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h2" variant="h5">Sign in</Typography>
          </Grid>
          <TextField
            value={username}
            id="standard-basic"
            label="Username"
            variant="standard"
            placeholder='Enter username'
            fullWidth
            required
            onChange={handleUsernameChange}
          />
          <TextField
            value={password}
            id="standard-basic"
            label="Password"
            variant="standard"
            placeholder='Password'
            type='password'
            fullWidth
            required
            onChange={handlePasswordChange}
          />

          <Button
            type='submit'
            color='primary'
            variant='contained'
            style={btnStyle}
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>

          {error && <Typography variant="body2" color="error" style={{ marginLeft: '55px' }}>{error}</Typography>} 
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
