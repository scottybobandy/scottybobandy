import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

export default class App extends Component {
    render() {
        const home = <Home/>

        return (
            <div>
                <Route exact path='/' render={(props) => home}/>
            </div>
        );
    }
}