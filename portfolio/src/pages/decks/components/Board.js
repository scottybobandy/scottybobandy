import React from "react";
import { Col } from "react-bootstrap";
import Cards from "./Cards";

Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
      var R = [];
      for (var i = 0; i < this.length; i += chunkSize)
        R.push(this.slice(i, i + chunkSize));
      return R;
    }
});

export default function Board(props) {
    const { board } = props;
    const { name, cards } = board;

    return (
        <Col className="board" xs={ 12 } style={{ padding: "0" }}>
            <h5 style={{ textAlign: "center" }}>{ name } ({cards.length})</h5>
            {
                cards.chunk(4).map((cards, key) => {
                    return <Cards key={ key } cards={ cards }/>
                })
            }
        </Col>
    );
}
