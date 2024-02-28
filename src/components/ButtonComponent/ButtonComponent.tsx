import React from 'react'
import {Button} from "react-bootstrap";

interface ButtonComponentProps  {
    mode: string
    label: string;
    handleButton?: () => void
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({mode,handleButton, label}) => {
    return (
        <>
            {mode === 'light' && <Button onClick={handleButton} variant="primary">{label}</Button> }
            {mode === 'fullwidth' && <Button onClick={handleButton} variant="primary" size="lg">{label}</Button>}
        </>)
}