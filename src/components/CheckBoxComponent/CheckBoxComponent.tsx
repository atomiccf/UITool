import React from "react";
import Form from 'react-bootstrap/Form';
import {CheckBoxComponentProps} from "./CheckBoxComponent.types";


export const CheckBoxComponent:React.FC<CheckBoxComponentProps> = ({labelText}) => {
    return(
        <Form>
            <Form.Check
                label={labelText}
            />
        </Form>
      )
}