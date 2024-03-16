import React from "react";
import Form from 'react-bootstrap/Form';
import {InputComponentProps} from "./InputComponent.types";
import {Col, Row} from "react-bootstrap";
import {useId} from "react";

export const InputComponent:React.FC<InputComponentProps> = ({mode, labelText, placeHolder}) => {
    const id = useId()
    const handleOnFocus = (EO: React.FocusEvent<HTMLInputElement>) => {
        EO.target.type= 'date'
    }
    const handleOnBlur = (EO: React.FocusEvent<HTMLInputElement>) => {
      EO.target.type= 'text'
    }

    return(
        <>
        {mode === 'login' &&
         <Form.Control type="text" placeholder="Login" />
            }
        {mode === 'password' &&
            <Form.Control type="password" placeholder="Password" />
        }
        {mode === 'email' &&
            <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm="2">Email</Form.Label>
                <Col sm="10">
            <Form.Control type="email" placeholder="Enter email" />
                </Col>
            </Form.Group>
        }
        {mode === 'search' &&
             <Form.Control type="text" placeholder="Find in Settings" className="mr-sm-2" />
        }
        {mode === 'text' &&
            <Form.Group controlId={id} as={Col} className="mb-3" >
            <Form.Label column sm="2">{labelText}</Form.Label>
            <Form.Control type="text" placeholder={placeHolder} />
            </Form.Group>
            }
            {mode === 'date' &&
                <Form.Control type="date" onFocus={handleOnFocus} onBlur={handleOnBlur} />
            }
        </>

    )
}