import { TurnedInNot } from "@mui/icons-material";
import { Box, Grid, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

export const Sidebar = ({ draweWidth }) => {
  return (
    <Box
      component='nav'
      sx={{ width: {sm: draweWidth}, flexShrink: { sm: 0 } }}
    >
      <Drawer
        open
        variant='permanent'
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', width: draweWidth 
          }
        }}
      >
        <Toolbar>
          <Typography
            noWrap
            variant='h6'
            component='div'
          >
            Sebastian Meneses
          </Typography>
        </Toolbar>
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
