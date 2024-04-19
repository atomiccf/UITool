import React from "react";

export interface ButtonComponentProps  {
    variant: "primary" | "light" | "danger"
    handleButton?: () =>  void
    handleSubmit?: () => Promise<void> | void
    children?: string | React.ReactNode
    size?: "sm" | "lg" | undefined
    type?: "submit"
}