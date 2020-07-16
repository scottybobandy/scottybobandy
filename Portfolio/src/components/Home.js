import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Feature from "./Feature";
import Heading from "./Heading";

import features from "../stores/Store";

export default class Marketing extends Component {
    render() {
        const components = features.map((feature, index) => {
            return <Feature id={index} feature={feature}/>   
        });

        return (
            <Grid style={{marginBottom: "3em"}}>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
                        <Heading/>
                        {components}
                    </Col>
                </Row>
            </Grid>
        );
    }
}