import React from "react";
import "./App.css";
import Drawer from "./components/Drawer";
import Explore from "./components/Fetch";
import AddSpecies from "./pages/AddSpecies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/ErrorPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Plants from './pages/Plants';
import forgotPswd from './pages/forgotPswd'
import Search from './components/Search'
import Dashboard from './pages/Dashboard'
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {AuthProvider} from './components/Authentication/AuthProvider';
import ProtectedRoute from './components/Authentication/ProtectedRoute'

function App() {
  return (
    <>
    
      <ThemeProvider theme={theme}>
        <AuthProvider>
        <Drawer />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/explorespecies" component={Explore}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <ProtectedRoute path="/addspecies" component={AddSpecies} />
          <Route path="/plant/:id" component={Plants} />
          <Route path="/search" component={Search}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgotPswd" component={forgotPswd}/>
          <Route component={Error} />
        </Switch>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
