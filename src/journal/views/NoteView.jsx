import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography
          fontSize={39}
          fontWeight='light'
        >
          28 de agsoto, 2023
        </Typography>
      </Grid>

      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          fullWidth
          type='text'
          label='Título'
          variant='filled'
          placeholder='Ingrese un titulo'
          sx={{ borde: 'none', mb: 1 }}
        />

        <TextField
          fullWidth
          multiline
          type='text'
          variant='filled'
          placeholder='¿Qué sucedio en día de hoy'
          minRows={5}
          sx={{ borde: 'none', mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}