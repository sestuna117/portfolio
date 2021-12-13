import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutPage from "./components/about/AboutPage";
import ProjectsPage from "./components/projects/ProjectsPage";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
