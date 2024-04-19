import React from 'react'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonComponentProps} from "./ButtonComponent.types"


export const ButtonComponent: React.FC<ButtonComponentProps> = ({
                                                                    type,
                                                                    variant,
                                                                    handleButton,
                                                                    children,
                                                                    size,
                                                                    handleSubmit
                                                                }) => {
    return <Button onClick={handleButton || handleSubmit} variant={variant} size={size} type={type}>{children}</Button>
}