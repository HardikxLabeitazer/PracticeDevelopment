import React from "react";
import MainRouter from './MainRouter'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Home from './core/Home'
import {hot} from 'react-hot-loader'
const App=()=>{
    return (
        
            
                <Home/>
           
        
    )
}

export default hot(module)(App)