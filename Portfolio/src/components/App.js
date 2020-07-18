import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./List";

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={ List }/>
            </div>
        );
    }
}