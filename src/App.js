import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    </>
    // <div >
    //   <Home/>
    //   <AboutUs/>
    //   <ContactUs/>
    // </div>
    // <Router>
      
    //     <nav>
    //       <ul>
    //         <Link to='/' style={{margin:2}}>Home</Link>
    //         <Link to='/AboutUs' style={{margin:2}}>AboutUs</Link>
    //         <Link to='/ContactUs' style={{margin:2}}>ContactUs</Link>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/AboutUs"><AboutUs/></Route>
    //       <Route path="/ContactUs"><ContactUs/></Route>
    //       <Route to="/"><Home/></Route>
    //     </Switch>
    //     {/* <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch> */}
    // </Router>
    
  );
}

export default App;
