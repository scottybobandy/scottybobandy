import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Media from "./Media";

export default class Card extends Component {
    render() {
        const { experience } = this.props;
        const { image, title, subtitle, description, url } = experience;

        return (
            <a href={url}>
                <Row className="card">
                    <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
                        <Media image={image} title={title} subtitle={subtitle}/>
                        <p style={{marginTop: "0.5em", marginBottom: "1em"}}>{description}</p>
                    </Col>
                </Row>
            </a>
        );
    }
}