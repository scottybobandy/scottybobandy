import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";
import Header from "./Header";
import DataStore from "../stores/DataStore";

export default function List() {
    const cards = DataStore.map((experience, key) => {
        return <Card key={ key } experience={ experience }/>
    });

    return (
        <Container style={{ marginBottom: "3em" }}>
            <Row>
                <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                    <Header/>
                    { cards }
                </Col>
            </Row>
        </Container>
    );
}