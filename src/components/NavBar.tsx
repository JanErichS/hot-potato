import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} /* Positions the navbar buttons to the right */>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            My React Website :)
          </Typography>

          <Button color="inherit">
            <NavLink
              to="/hot-potato"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "inherit",
              })}
            >
              Home
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "inherit",
              })}
            >
              Contact
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "inherit",
              })}
            >
              Login
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
