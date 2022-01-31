import React from "react";
import { Row, Col } from "react-bootstrap";
import Icon from 'react-fontawesome';

export default function Header() {
    return (
        <Row>
            <Col xs={ 12 } style={{ padding: "0" }}>
                <h2 style={{ marginBottom: "12px" }}>
                    Scott Campbell
                </h2>
                <a href="https://www.linkedin.com/in/scottaustencampbell/">
                    <Icon style={{ marginRight: "20px" }} name='linkedin-square' size='2x'/>
                </a>
                <a href="https://github.com/scottybobandy">
                    <Icon style={{ marginRight: "20px" }} name='github' size='2x'/>
                </a>
                <a href="https://twitter.com/scottybobandy">
                    <Icon style={{ marginRight: "20px" }} name='twitter' size='2x'/>
                </a>
                <p style={{ marginTop: "2em", marginBottom: "1em" }}>
                    I'm a software engineer living in Calgary, Canada with my partner and our cat Ozymandias.
                </p>
                <p style={{ marginBottom: "2em" }}>
                    I spend my days building digital products and living an active lifestyle. I'm an avid reader, Magic: The Gathering signed card collector, and craft beer enthusiast.
                </p>
            </Col>
        </Row>
    );
}
