import React from 'react'
import { Grid, Box, Button, Typography, CssBaseline ,Toolbar,AppBar} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Item from '../Item';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useWindowDimensions } from "../useWindowDimensions";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // smol phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});

const Dashboard = () => {
  const { width } = useWindowDimensions();
    const [searchparams]=useSearchParams();
    console.log(searchparams.get("email"));

    
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log("Logout Clicked");
        navigate('/login');
        searchparams.get('');
        console.log(searchparams.get("email"));
    }

  return (
   <ThemeProvider theme={theme}>
    
    <CssBaseline/>
    <Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary">
        <Toolbar>
            <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                MUI TASK
            </Typography>
            <Button component={NavLink} to='/' style={({isActive})=>{return{backgroundColor: isActive ?'#6d1b7b' :''}}}sx={{color:'white',textTransform:'none'}}>Home</Button>
            <Button component={NavLink} to='/contact' style={({isActive})=>{return{backgroundColor: isActive ?'#6d1b7b' :''}}}sx={{color:'white',textTransform:'none'}}>Contact</Button>
            <Button onClick={handleLogout} sx={{color:'white',textTransform:'none'}}>Logout</Button>

        </Toolbar>
    </AppBar>
  </Box>
    <Grid>
        <Grid item>
            <Typography variant='h4'>Hi..! {searchparams.get("email")}</Typography>
            {/* <Button variant='contained' color='warning' size='large'
            onClick={handleLogout}>Logout</Button> */}
        </Grid>
    </Grid>
    <Box>
      <Item/>
    </Box>
    </ThemeProvider>
  )
}

export default Dashboard