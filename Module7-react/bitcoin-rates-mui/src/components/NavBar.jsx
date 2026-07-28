import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
          Bitcoin App
        </Typography>

        <Box component="nav" aria-label="Main navigation">
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>

          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>

          <Button color="inherit" component={NavLink} to="/bitcoin-rates">
            Bitcon Rates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
