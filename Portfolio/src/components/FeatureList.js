import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Feature from "./Feature";
import Heading from "./Heading";

export default class FeatureList extends Component {
    render() {
        const { heading, features } = this.props;

        const components = features.map((feature, index) => {
            return <Feature id={index} feature={feature}/>   
        });

        return (
            <Grid style={{marginBottom: "3em"}}>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
                        { heading ? <Heading/> : null }
                        { components }
                    </Col>
                </Row>
            </Grid>
        );
    }
}