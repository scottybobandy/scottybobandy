import React from "react";
import { Row, Col } from "react-bootstrap";
import Media from "./Media";

export default function Card(props) {
    const { experience } = props;
    const { image, title, subtitle, description, url } = experience;

    return (
        <a className="card-link" href={ url }>
            <Row className="card">
                <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                    <Media image={ image } title={ title } subtitle={ subtitle }/>
                    <p style={{ marginTop: "0.5em", marginBottom: "1em" }}>
                        { description }
                    </p>
                </Col>
            </Row>
        </a>
    );
}
