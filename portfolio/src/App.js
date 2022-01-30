import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home/components/Home";

export default function App() {
    return (
        <div>
            <Route exact path='/' component={ Home }/>
        </div>
    );
}
