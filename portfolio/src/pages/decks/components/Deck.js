import React from "react";
import { Row, Col } from "react-bootstrap";
import Board from "./Board";
import DeckHeader from "./DeckHeader";

function Boards(props) {
    const { headboard, mainboard, sideboard } = props;
    var boards = [];
    if (headboard) {
        boards.push(<Board board={ headboard } />);
    }
    if (mainboard) {
        boards.push(<Board board={ mainboard } />);
    }
    if (sideboard) {
        boards.push(<Board board={ sideboard } />);
    }
    return boards
}

export default function Deck(props) {
    const { deck } = props;
    const { name, description, headboard, mainboard, sideboard } = deck;

    return (
        <Row>
            <Col xs={ 12 }>
                <DeckHeader name={ name } description={ description } />
                <Boards headboard={ headboard } mainboard={ mainboard } sideboard={ sideboard }/>
            </Col>
        </Row>
    );
}

