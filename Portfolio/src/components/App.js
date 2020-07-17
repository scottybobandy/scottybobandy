import React, { Component } from "react";
import { Route } from "react-router-dom";
import FeatureList from "./FeatureList";

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' render={(props) => <FeatureList/>}/>
            </div>
        );
    }
}