import React from "react";
import Form from 'react-bootstrap/Form';
import {InputComponentProps} from "./InputComponent.types";
import {Col, Row} from "react-bootstrap";
import {useId} from "react";

export const InputComponent:React.FC<InputComponentProps> = ({mode, labelText}) => {
    const id = useId()
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
            <Form.Group as={Row} className="mb-3" controlId="search">
             <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
             </Form.Group>
        }
        {mode === 'text' &&
            <Form.Group controlId={id} as={Row} className="mb-3" >
            <Form.Label column sm="2">{labelText}</Form.Label>
                <Col sm="10">
            <Form.Control type="text" />
                </Col>
            </Form.Group>
            }
        </>

    )
}