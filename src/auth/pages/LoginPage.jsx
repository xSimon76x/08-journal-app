import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link, Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import React, { useMemo } from 'react'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  // solucion error cap 305 
  const { email, password, onInputChange, formState } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch( checkingAuthentication() );

    dispatch( startLoginWithEmailPassword(formState) );
  };

  const onGoogleSignIn = (e) => {
    dispatch( startGoogleSignIn() )
  };

  return (
    <AuthLayout title='Login'>
      <form 
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
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

        <Grid container spacing={2} sx={{ mb:2, mt: 2}} display={ !!errorMessage ? '' : 'none'}>
          <Grid item xs={12} sm={12}>
            <Alert severity='error'>
              { errorMessage } 
            </Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb:2, mt: 2}}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth type='submit'
              disabled={ isAuthenticating } 
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth onClick={onGoogleSignIn}
              disabled={ isAuthenticating } 
            >
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
