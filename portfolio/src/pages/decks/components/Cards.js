import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export default function Cards(props) {
    const { cards } = props;

    return (
        <Row className="cards">
            {
                cards.map((card, key) => {
                    return <Col style={{ padding: "0" }} xs={ 3 }>
                        <Image src={ card.image } fluid/>
                    </Col> 
                })
            }
        </Row>
    );
}
