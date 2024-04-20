import React from "react";
import Form from 'react-bootstrap/Form';
import {InputComponentProps} from "./InputComponent.types";
import {useId} from "react";

export const InputComponent: React.FC<InputComponentProps> = ({type, labelText, placeHolder, handleChange}) => {
    const id = useId()

    return (
        <>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control type={type} onChange={handleChange} placeholder={placeHolder}/>
        </>

       )


}