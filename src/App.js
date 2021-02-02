import React, {Component} from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Error from './Pages/Error'
import SingleRoom from './Pages/SingleRoom'
import {Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar'
import './App.css'


export default class App extends Component
{
    render()
    {
        return (
            <>
                <Navbar />
                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/rooms/:slug" component={SingleRoom} />
                    <Route component={Error} />

                </Switch>
            </>
        )
    }
}


