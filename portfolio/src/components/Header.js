import React from "react";
import { Row, Col } from "react-bootstrap";
import Icon from 'react-fontawesome';

export default function Header() {
    return (
        <Row>
            <Col xs={ 12 } style={{ padding: "0" }}>
                <h2 style={{ marginTop: "2em", marginBottom: "12px" }}>
                    Scott Campbell
                </h2>
                <a href="https://www.linkedin.com/in/scott-dot-confirmed/">
                    <Icon style={{ marginRight: "20px" }} name='linkedin-square' size='2x'/>
                </a>
                <a href="https://github.com/Campbell-Scott">
                    <Icon style={{ marginRight: "20px" }} name='github' size='2x'/>
                </a>
                <a href="https://twitter.com/scottybobandy">
                    <Icon style={{ marginRight: "20px" }} name='twitter' size='2x'/>
                </a>
                <p style={{ marginTop: "2em", marginBottom: "1em" }}>
                    I'm a software developer living in Ottawa, Canada.
                </p>
                <p style={{ marginBottom: "1em" }}>
                    I spend my days building digital products and living an active lifestyle. I'm an avid reader, Magic: The Gathering® player, and craft beer enthusiast.
                </p>
                <p style={{ marginBottom: "2em" }}>
                    Here's the work I'm most proud of:
                </p>
            </Col>
        </Row>
    );
}