import React, {useId} from "react";
import Form from 'react-bootstrap/Form';
import {InputDateProps} from "./DateInput.types";

export const DateInputDate: React.FC<InputDateProps> = ({labelText,handleChange,placeHolder}) => {
    const id = useId()
    const handleOnFocus = (EO: React.FocusEvent<HTMLInputElement>) => {
        EO.target.type= 'date'
    }
    const handleOnBlur = (EO: React.FocusEvent<HTMLInputElement>) => {
        EO.target.type= 'text'
    }

    return (
        <Form.Group controlId={id} className="mb-3" >
            <Form.Label column sm="2">{labelText}</Form.Label>
            <Form.Control onChange={handleChange} placeholder={placeHolder} type="text" onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </Form.Group>
    )
}