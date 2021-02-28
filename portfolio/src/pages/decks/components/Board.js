import React from "react";
import { Col } from "react-bootstrap";
import Cards from "./Cards";

function chunkCards(cards, size) {
    var slices = [];
    for (var i = 0; i < cards.length; i += size)
        slices.push(cards.slice(i, i + size));
    return slices;
}

export default function Board(props) {
    const { board } = props;
    const { name, cards } = board;

    return (
        <Col className="board" xs={ 12 } style={{ padding: "0" }}>
            <h6 style={{ textAlign: "center" }}>{ name } ({cards.length})</h6>
            {
                chunkCards(cards, 4).map((cards, key) => {
                    return <Cards key={ key } cards={ cards }/>
                })
            }
        </Col>
    );
}
