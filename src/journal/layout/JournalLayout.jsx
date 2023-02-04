import { Box,Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "../components";

const draweWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ diplay: 'flex' }}>

      {/* Navbar draweWidth */}
      <Navbar draweWidth={draweWidth} />

      {/* Sidebar draweWidth */}
      <Sidebar draweWidth={draweWidth} />

      <Box 
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />

        { children }
      </Box>

    </Box>
  )
};
