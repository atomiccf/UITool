import React from "react";
import {ProgressBar} from "react-bootstrap";
import {ProgressBarComponentProps} from "./ProgressBarComponent.types";

export const ProgressBarComponent:React.FC<ProgressBarComponentProps> = ({min, max, now}) => {
    return <ProgressBar min={min} max={max} now={now}/>;
}