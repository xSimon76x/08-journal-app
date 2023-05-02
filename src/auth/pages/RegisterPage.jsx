import React, { useMemo, useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Grid, TextField, Typography, Link, Button, Alert } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'


const formData = {
  email: 'simon22@gmail.com',
  password: '123345',
  displayName: 'simon ivan'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 caracteres.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { 
    email, 
    password, 
    displayName, 
    onInputChange, 
    formState,
    isFormValid,
    emailValid,
    passwordValid, 
    displayNameValid, 
  } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { status, errorMessage } = useSelector( state => state.auth)
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] )


  const onSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={ onSubmit }>

        {/* <h1 color='white'>FormValid: { isFormValid ? 'Valid' : 'Not Valid' }</h1> */}

        <Grid container >
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Nombre Completo'
               type='text'
               placeholder='Nombre Completo' 
               fullWidth 
               name='displayName'
               value={ displayName }
               onChange={ onInputChange }
               error={ !!displayNameValid && formSubmitted} 
               helperText={ displayNameValid }
              />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email'
              placeholder='correo@gmail.com' 
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted} 
              helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña' 
              type='password'
              placeholder='******' 
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted} 
              helperText={ passwordValid }
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
              disabled={ isCheckingAuthentication }
            >
              Crear Cuenta
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth
              disabled={ isCheckingAuthentication }
            >
              <Google />
              <Typography sx={{ ml: 1}}> Google </Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
          <Link component={ RouterLink } color='inherit' to='/auth/login'>
            Ingresar
          </Link>
        </Grid>
      
      </form>
    </AuthLayout>
  )
}
