import React from 'react'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonComponentProps} from "./ButtonComponent.types"


export const ButtonComponent: React.FC<ButtonComponentProps> = ({mode,handleButton,children,size,handleSubmit}) => {
    return (
        <>
            {mode === 'primary' && <Button onClick={handleButton} variant="primary" size={size}>{children}</Button> }
            {mode === 'light' && <Button onClick={handleButton} variant="light">{children}</Button>}
            {mode === 'success' && <Button variant="success">{children}</Button>}
            {mode === 'danger' && <Button onClick={handleButton} variant="danger">{children}</Button>}
            {mode === 'submit' && <Button size={size} onClick={handleSubmit} variant="primary">{children}</Button>}
        </>)
}