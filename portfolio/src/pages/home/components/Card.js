import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Card(props) {
    const { experience } = props;
    const { role, place, timeframe, url } = experience;

    return (
        <a className="card-container" href={ url }>
            <Row className="card">
                <Col xs={ 12 }>
                    <h6 style={{ marginTop: "1em", marginBottom: "0", textAlign: "center" }}>{ role }</h6>
                    <p style={{ marginBottom: "1em", textAlign: "center", fontSize: "14px" }}>
                        { timeframe }
                        <span className="card-link">
                            { place }
                        </span>
                    </p>
                </Col>
            </Row>
        </a>
    );
}
