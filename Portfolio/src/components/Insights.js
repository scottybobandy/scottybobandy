import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class Insights extends Component {
    render() {
        const { insights } = this.props;

        const components = insights.map((insight, _) => {
            return <div style={{marginBottom: "0"}}>
                <Image src={insight.icon} style={{width: '20px', display: "inline", marginRight: "0.5em"}}/>
                {insight.title}
            </div>          
        });

        return (
            <div style={{marginBottom: "1em"}}>
                {components}
            </div>
        );
    }
}