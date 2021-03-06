import React from 'react';
import "./styles/burgerMenuStyles.css";
import './App.css';
import HomePage from './pages/homePage';
// import LoadingPage from "./pages/loadingPage";
import ArchProjects from "./pages/archProjects";
import UIProjects from "./pages/uiProjects";
import PhotoGraphy from "./pages/photoGraphy";
import OtherProjects from "./pages/otherProjects";
import { Route, BrowserRouter } from "react-router-dom";


function App() {
    return ( 
            <BrowserRouter>
                <Route path="/arch" exact>
                    <ArchProjects />
                </Route>
                <Route path="/Ui" exact>
                    <UIProjects />
                </Route>
                <Route path="/photo" exact>
                    <PhotoGraphy />
                </Route>
                <Route path="/Other" exact>
                    <OtherProjects/>
                </Route>
                <Route path="/" exact> 
                    <HomePage />
                </Route>
            </BrowserRouter>
    );
}

export default App;