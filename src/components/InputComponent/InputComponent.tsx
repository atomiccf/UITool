import React from "react";
import Form from 'react-bootstrap/Form';
import {InputComponentProps} from "./InputComponent.types";
import {Col, Row} from "react-bootstrap";
import {useId} from "react";

export const InputComponent:React.FC<InputComponentProps> = ({mode, labelText, placeHolder,handleChange}) => {
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
             <Form.Control onChange={handleChange} type="text" placeholder="Login" />
        }
        {mode === 'password' &&
            <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Control onChange={handleChange} type="password" placeholder="Password" />
            </Form.Group>
        }
        {mode === 'email' &&
            <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm="2">{labelText}</Form.Label>
            <Form.Control type="email" onChange={handleChange} placeholder={placeHolder} />
            </Form.Group>
        }
        {mode === 'search' &&
            <Form.Control type="text" onChange={handleChange} placeholder={placeHolder} className="mr-sm-2" />
        }
        {mode === 'text' &&
        <>
            <Form.Group controlId={id} as={Row} className="mb-3" >
                <Form.Label column sm="2">{labelText}</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder={placeHolder} />
            </Form.Group>
        </>
                       }
            {mode === 'date' &&
            <Form.Group controlId={id} as={Col} className="mb-3" >
            <Form.Label column sm="2">{labelText}</Form.Label>
            <Form.Control onChange={handleChange} placeholder={placeHolder} type="text" onFocus={handleOnFocus} onBlur={handleOnBlur} />
            </Form.Group>
            }
        </>

    )
}