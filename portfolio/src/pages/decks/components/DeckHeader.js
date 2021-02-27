import React from "react";
import { Col, Row } from "react-bootstrap";

export default function DeckHeader(props) {
    const { name, description } = props;

    return (
        <Row>
            <Col style={{ marginTop: "2em", marginBottom: "2em" }} xs={ 12 }>
                <h2 style={{ marginBottom: "6px", textAlign: "center" }}>
                    { name }
                </h2>
                <p style={{ textAlign: "center" }}>{ description }</p>
            </Col>
        </Row>
    );
}
