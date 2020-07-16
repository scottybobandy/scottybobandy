import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class Media extends Component {
    render() {
        const { image, title, position } = this.props;

        return (
            <div className="media" style={{verticalAlign: "middle", marginTop: "1em"}}>
                <div className="media-left">
                    <Image src={image} className="media-object" style={{height: "42px"}}/>
                </div>
                <div className="media-body">
                    <h4 className="media-heading" style={{margin: "0"}}>{title}</h4>
                    <p style={{margin: "0", color: "rgba(47,79,79,0.75)"}}>{position}</p>
                </div>
            </div>
        );
    }
}