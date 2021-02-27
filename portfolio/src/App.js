import React from "react";
import { Route } from "react-router-dom";
import Decks from "./pages/decks/components/Decks";
import Home from "./pages/home/components/Home";

export default function App() {
    return (
        <div>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/decks' component={ Decks }/>
        </div>
    );
}
