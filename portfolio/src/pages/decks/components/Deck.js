import React from "react";
import { Row, Col } from "react-bootstrap";
import Board from "./Board";
import DeckHeader from "./DeckHeader";

export default function Deck(props) {
    const { deck } = props;
    const { name, description, headboard, mainboard, sideboard } = deck;

    return (
        <Row>
            <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                <DeckHeader name={ name } description={ description } />
                <Row>
                    <Col className="deck" xs={ 12 }>
                        <Board board={ headboard } />
                        <Board board={ mainboard } />
                        <Board board={ sideboard } />
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}

