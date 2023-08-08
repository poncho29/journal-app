import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
  email: 'meneses321@hotmail.com',
  password: '123456',
  displayName: 'Sebastian Meneses'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
  const { formState, onInputChange } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title='Registro'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type='text'
              label='Nombre completo'
              placeholder='Tú nombre'
              name='displayName'
              value={formState.displayName}
              onChange={onInputChange}
              error
              helperText='El nombre es obligatorio'
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type='email'
              label='Correo'
              placeholder='correo@gmail.com'
              name='email'
              value={formState.email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type='contraseña'
              label='Contraseña'
              placeholder='*****'
              name='password'
              value={formState.password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button fullWidth variant='contained' type='submit'>
                <Typography>Crear cuenta</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
