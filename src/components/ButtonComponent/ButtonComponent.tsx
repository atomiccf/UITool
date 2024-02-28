import React from 'react'
import {Button} from "react-bootstrap";

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