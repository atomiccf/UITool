import React from 'react'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonComponentProps} from "./ButtonComponent.types"


export const ButtonComponent: React.FC<ButtonComponentProps> = ({mode,handleButton,children}) => {
    return (
        <>
            {mode === 'light' && <Button onClick={handleButton} variant="primary" size="sm">{children}</Button> }
            {mode === 'fullwidth' && <Button onClick={handleButton} variant="primary" size="lg">{children}</Button>}
        </>)
}