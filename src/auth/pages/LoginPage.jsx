import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form action="">
        <Grid container >
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
              Login
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
          <Link component={ RouterLink } color='inherit' to='/auth/register'>
            Crear una cuenta
          </Link>
        </Grid>
      
      </form>
    </AuthLayout>
    


  )
}
