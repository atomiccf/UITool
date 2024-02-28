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
        <>
            {mode === 'light' && <Button onClick={handleButton} variant="primary">{children}</Button> }
            {mode === 'fullwidth' && <Button onClick={handleButton} variant="primary" size="lg">{children}</Button>}
        </>)
}