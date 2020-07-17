import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Media from "./Media";

export default class Feature extends Component {
    render() {
        const { feature } = this.props;
        const { image, link, position, subtitle, title } = feature;

        return (
            <a href={link}>
                <Row className="feature">
                    <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                        <Media image={image} title={title} position={position}/>
                        <p style={{marginTop: "0.5em", marginBottom: "1em"}}>{subtitle}</p>
                    </Col>
                </Row>
            </a>
        );
    }
}