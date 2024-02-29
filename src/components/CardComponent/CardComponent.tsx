import React from "react";
import {Card} from "react-bootstrap";
import {CardComponentProps} from "./CardComponent.types";

export const CardComponent:React.FC<CardComponentProps> = ({src,title,width}) => {
    return (
        <Card style={{ width: width }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Subtitle>{title}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}
