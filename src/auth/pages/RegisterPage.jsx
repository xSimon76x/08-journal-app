import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Grid, TextField, Typography, Link, Button } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'


const formData = {
  email: 'simon@google.com',
  password: '1234',
  displayName: 'Simon Bustamante'
}


export const RegisterPage = () => {

  const { email, password, displayName, onInputChange, formState } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState)
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={ onSubmit }>
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
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb:2, mt: 2}}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth type='submit'>
              Crear Cuenta
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
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
