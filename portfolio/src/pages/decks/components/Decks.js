import React from "react";
import { Container } from "react-bootstrap";
import DataStore from "../stores/DecksDataStore";
import Deck from "./Deck";

export default function Decks() {
    return (
        <Container style={{ marginBottom: "3em" }}>
            {
                DataStore.map((deck, key) => {
                    return <Deck key={ key } deck={ deck }/>
                })
            }
        </Container>
    );
}
