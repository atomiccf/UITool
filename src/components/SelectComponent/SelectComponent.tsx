import Form from 'react-bootstrap/Form';
import React from "react";
import {SelectComponentProps} from "./SelectComponent.types";

export const SelectComponent:React.FC<SelectComponentProps> = ({data}) => {
    return (
    <Form.Select aria-label="Default select example" className="Select">
    {data.map((item) => (<option key={item} value={item}>{item}</option>))}
    </Form.Select>
    )
}