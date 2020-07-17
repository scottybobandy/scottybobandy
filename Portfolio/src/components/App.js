import React, { Component } from "react";
import { Route } from "react-router-dom";
import FeatureList from "./FeatureList";
import store from "../stores/Store";

export default class App extends Component {
    render() {
        const fullList = <FeatureList heading={true} features={store}/>
        const partialList = <FeatureList heading={false} features={store.slice(1, 3)}/>

        return (
            <div>
                <Route exact path='/' render={(props) => fullList}/>
                <Route exact path='/partial' render={(props) => partialList}/>
            </div>
        );
    }
}