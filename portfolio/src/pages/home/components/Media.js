import React from "react";
import { Image } from "react-bootstrap";

export default function Media(props) {
    const { image, title, subtitle } = props;

    return (
        <div className="media" style={{ verticalAlign: "middle", marginTop: "1em" }}>
            <div className="media-left" style={{ paddingRight: "10px" }}>
                <Image src={ image } className="media-object" style={{ height: "42px" }}/>
            </div>
            <div className="media-body">
                <h5 className="media-heading" style={{ margin: "0" }}>
                    { title }
                </h5>
                <p style={{ margin: "0", color: "rgba(47,79,79,0.75)" }}>
                    { subtitle }
                </p>
            </div>
        </div>
    );
}