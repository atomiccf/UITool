import React from "react";
import Form from 'react-bootstrap/Form';
import {InputComponentProps} from "./InputComponent.types";
import {Button} from "react-bootstrap";

export const InputComponent:React.FC<InputComponentProps> = ({mode, labelText}) => {
    return(
        <>
        {mode === 'login' &&
            <Form.Group className="mb-3" controlId="login">
            <Form.Label htmlFor={"login"}>Login</Form.Label>
            <Form.Control type="text" placeholder="Enter login name" />
            </Form.Group>
            }
        {mode === 'password' &&
            <Form.Group className="mb-3" controlId="password">
            <Form.Label htmlFor={"password"}>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
        }
        {mode === 'email' &&
            <Form.Group className="mb-3" controlId="email">
            <Form.Label htmlFor={"password"}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        }
        {mode === 'search' &&   <Form>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>}
        {mode === 'text' &&
            <Form.Group className="mb-3" >
            <Form.Label htmlFor={"password"}>{labelText}</Form.Label>
            <Form.Control type="text" />
            </Form.Group>
            }
        </>

    )
}