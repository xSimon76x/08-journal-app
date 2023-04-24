import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { useDispatch } from 'react-redux'
import React from 'react'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store'

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'simon@gmail.com',
    password: '123456'
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch( checkingAuthentication() )
  };

  const onGoogleSignIn = (e) => {
    dispatch( startGoogleSignIn() )
  };

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container >
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Correo' type='email' 
              placeholder='correo@gmail.com' fullWidth
              onChange={onInputChange} name='email'
              value={email}
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Contraseña' type='password' 
              placeholder='******' fullWidth
              onChange={onInputChange} name='password'
              value={password}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb:2, mt: 2}}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth type='submit'>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth onClick={onGoogleSignIn}>
              <Google />
              <Typography sx={{ ml: 1}}> Google </Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Link component={ RouterLink } color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid>
      
      </form>
    </AuthLayout>
    


  )
}
