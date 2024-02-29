import React from "react";
import Form from 'react-bootstrap/Form';
import {CheckBoxComponentProps} from "./CheckBoxComponent.types";


export const CheckBoxComponent:React.FC<CheckBoxComponentProps> = ({labelText}) => {
    return(
        <Form>
             <div  className="mb-3">
                    <Form.Check // prettier-ignore
                    label={labelText}
                    />
             </div>
        </Form>
)
}