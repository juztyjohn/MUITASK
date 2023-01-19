import { Card, Tabs, Tab, Box } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Login } from './Login';
import Registration from './Registration';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const theme = createTheme();
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  return (
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            margin:'auto',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems:'center',
          }}
        >
        <Card sx={{ width:'100%', height:'100%', padding:'10px'}}>
          <Box sx ={{mx:3}} >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Tabs
              value={value}
              textColor="secondary"
              indicatorColor="secondary"
              onChange={handleChange}
            >
              <Tab
                label="Login"
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
              ></Tab>
              <Tab label="Registration" sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
            </Tabs>
          </Box>
          </Box>
          <TabPanel value={value} index={0}>
            <Login/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Registration/>
          </TabPanel>
        </Card>
       </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginReg;
