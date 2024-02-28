import React from 'react'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonComponentProps} from "./ButtonComponent.types"


export const ButtonComponent: React.FC<ButtonComponentProps> = ({mode,handleButton,children,size}) => {
    return (
        <>
            {mode === 'primary' && <Button onClick={handleButton} variant="primary">{children}</Button> }
            {mode === 'light' && <Button onClick={handleButton} variant="light">{children}</Button>}
            {mode === 'success' && <Button variant="success">{children}</Button>}
            {mode === 'danger' && <Button onClick={handleButton} variant="danger">{children}</Button>}
        </>)
}