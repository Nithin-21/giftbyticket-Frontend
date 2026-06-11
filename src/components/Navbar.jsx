import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          GiftByTicket
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;