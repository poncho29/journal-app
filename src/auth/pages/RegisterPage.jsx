import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks"
import { AuthLayout } from "../layout/AuthLayout"
import { startCreatingUserWithEmialAndPassword } from "../../store/auth"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { formState, formValidation, isFormValid, onInputChange } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmialAndPassword(formState));
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
              error={!!formValidation.displayNameValid && formSubmitted}
              helperText={formValidation.displayNameValid}
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
              error={!!formValidation.emailValid && formSubmitted}
              helperText={formValidation.emailValid}
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
              error={!!formValidation.passwordValid && formSubmitted}
              helperText={formValidation.passwordValid}
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container  sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                fullWidth
                type='submit'
                variant='contained'
                disabled={!isFormValid || isCheckingAuthentication}
              >
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
