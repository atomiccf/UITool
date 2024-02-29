import React from "react";
export interface SelectComponentProps {
    data:string[]
    handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}