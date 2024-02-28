import React from 'react'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonComponentProps  {
    mode?: string
    handleButton?: () => void
    children?: string | React.ReactNode
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({mode,handleButton,children}) => {
    return (
        <Button onClick={handleButton} variant="primary" size="lg">{children}</Button>
        )
}