import Form from 'react-bootstrap/Form';
import React from "react";
import {SelectComponentProps} from "./SelectComponent.types";

export const SelectComponent:React.FC<SelectComponentProps> = ({data, handleChange,switchLabel, labelText}) => {
    return (
    <>
    {!switchLabel &&
        <Form.Select onChange={handleChange} aria-label="Default select example" className="Select">
            {data.map((item) => (<option key={item} value={item}>{item}</option>))}
        </Form.Select>
    }
    {switchLabel &&
        <>
            <Form.Label>{labelText}</Form.Label>
            <Form.Select onChange={handleChange} aria-label="Default select example" className="Select">
                {data.map((item) => (<option key={item} value={item}>{item}</option>))}
            </Form.Select>
        </>
    }
    </>

    )
}