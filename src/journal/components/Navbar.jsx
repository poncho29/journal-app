import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const Navbar = ({ draweWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: { sm: `${draweWidth}` },
        width: { sm: `calc(100% - ${draweWidth}px)` }
      }}
    >
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography
            noWrap
            variant="h6"
            component='div'
          >
            Journal App
          </Typography>

          <IconButton
            color='error'
          >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
