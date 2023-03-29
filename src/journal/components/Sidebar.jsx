import { TurnedInNot } from "@mui/icons-material";
import { 
  Box, 
  Grid, 
  Divider, 
  Drawer, 
  List, 
  ListItem,
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Typography 
} from "@mui/material";

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component='nav'
      sx={{
        width: {sm: drawerWidth},
        flexShrink: {sm: 0}
      }}
    >
      <Drawer
        open
        variant='permanent' // temporary
        sx={{
          display: {xs: 'block'},
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth 
          }
        }}
      >
        <Toolbar>
          <Typography noWrap variant='h6' component='div'>
            Sebastian Meneses
          </Typography>
        </Toolbar>
        <Divider />
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Abril'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}


