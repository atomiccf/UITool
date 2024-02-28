import React from 'react'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonComponentProps} from "./ButtonComponent.types"


export const ButtonComponent: React.FC<ButtonComponentProps> = ({mode,handleButton,children}) => {
    return (
        <>
            {mode === 'primary' && <Button onClick={handleButton} variant="outline-primary">{children}</Button> }
            {mode === 'light' && <Button onClick={handleButton} variant="outline-light">{children}</Button>}
            {mode === 'danger' && <Button onClick={handleButton} variant="outline-danger">{children}</Button>}
        </>)
}