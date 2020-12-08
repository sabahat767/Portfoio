import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useRouteMatch,
  useParams
} from "react-router-dom";
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
function Navbar() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className={classes.root}>
        <Router>

        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="About Us" {...a11yProps(1)} />
            <Tab label="Contact" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
       
       <TabPanel  value={value} index={0}>
       <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      {/* <Link to='/AboutUs' style={{margin:2}}>AboutUs</Link> */}
      <AboutUs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ContactUs/>
      {/* <Link to='/ContactUs' style={{margin:2}}>ContactUs</Link>      */}
      </TabPanel>
        {/* <Switch>
          <Route path="/AboutUs"><AboutUs/></Route>
          <Route path="/ContactUs"><ContactUs/></Route>
          <Route to="/"><Home/></Route>
        </Switch> */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
    </Router>
    </div>
    )
}

export default Navbar
