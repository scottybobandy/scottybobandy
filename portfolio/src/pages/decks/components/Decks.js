import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import DataStore from "../stores/DecksDataStore";
import Deck from "./Deck";

export default function Decks() {
    const maelstrom = DataStore[0]
    const seton = DataStore[1]
    const kumena = DataStore[2]
    const najeela = DataStore[3]
    const canlander = DataStore[4]
    const affinity = DataStore[5]

    return (
        <Container style={{ marginTop: "4em", marginBottom: "3em" }}>
            <Tab.Container defaultActiveKey={ maelstrom.name }>
                <Row>
                    <Col style={{ marginBottom: "3.5em" }} xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 0 }}>
                        <a href="/" style={{ paddingLeft: "17px" }}>Home</a>
                        <Nav variant="pills" className="flex-column" style={{ paddingRight: "12px", marginTop: "8px" }}>
                            <Nav.Item>
                                <Nav.Link eventKey={ maelstrom.name }>{ maelstrom.name }</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={ seton.name }>{ seton.name }</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={ kumena.name }>{ kumena.name }</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={ najeela.name }>{ najeela.name }</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={ canlander.name }>{ canlander.name }</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={ affinity.name }>{ affinity.name }</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={ 10 } sm={ 8 } md={ 6 }>
                        <Tab.Content>
                            <Tab.Pane eventKey={ maelstrom.name }>
                                <Deck deck={ maelstrom }/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={ seton.name }>
                                <Deck deck={ seton }/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={ kumena.name }>
                                <Deck deck={ kumena }/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={ najeela.name }>
                                <Deck deck={ najeela }/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={ canlander.name }>
                                <Deck deck={ canlander }/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={ affinity.name }>
                                <Deck deck={ affinity }/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}
