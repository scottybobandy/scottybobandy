import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Header from "./Header";
import DataStore from "../stores/DataStore";

export default class List extends Component {
    render() {
        const cards = DataStore.map((experience, index) => {
            return <Card id={index} experience={experience}/>   
        });

        return (
            <Grid style={{marginBottom: "3em"}}>
                <Row>
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
                        <Header/>
                        {cards}
                    </Col>
                </Row>
            </Grid>
        );
    }
}