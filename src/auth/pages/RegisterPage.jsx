import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Grid, TextField, Typography, Link, Button } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form action="">
        <Grid container >
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Nombre Completo' type='text' placeholder='Nombre Completo' fullWidth/>
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Correo' type='email' placeholder='correo@gmail.com' fullWidth/>
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Contraseña' type='password' placeholder='******' fullWidth/>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb:2, mt: 2}}>
          <Grid item xs={12} sm={6}>
            <Button variant='contained' fullWidth>
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
