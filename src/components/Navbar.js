import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from './Styles/styles';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
const Responsive = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('mobile')]: {},
  [theme.breakpoints.up('tablet')]: {},
  [theme.breakpoints.up('desktop')]: {},
}));
const MenuContainer = styled('li')(() => ({
  display: 'flex',
  flexDirection:"column",
  padding: '8px',
}));
const Bar = styled('div')(() => ({
  content: "''",
  width: '30px',
  border: '1px solid #00adb5',
  margin: '4px',
}));

function Navbar() {
  const matches = useMediaQuery(theme.breakpoints.down('tablet'));
  return (
    <Responsive>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            MUI TASK
          </Typography>
          {!matches && (
            <>
              <Button
                component={NavLink}
                to="/"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? '#6d1b7b' : '' };
                }}
                sx={{ color: 'white', textTransform: 'none' }}
              >
                Home
              </Button>
              <Button
                component={NavLink}
                to="/contact"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? '#6d1b7b' : '' };
                }}
                sx={{ color: 'white', textTransform: 'none' }}
              >
                Contact
              </Button>
              <Button
                component={NavLink}
                to="/login"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? '#6d1b7b' : '' };
                }}
                sx={{ color: 'white', textTransform: 'none' }}
              >
                Login
              </Button>
            </>
          )}
          {matches && (
            <MenuContainer>
              <Bar />
              <Bar />
              <Bar />
            </MenuContainer>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </Responsive>
  );
}

export default Navbar;
