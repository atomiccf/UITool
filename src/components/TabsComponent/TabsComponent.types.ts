import {ReactNode} from "react";

export interface TabComponentProps {
    tabsList:tabListObject[]
    handleSelect?: () => void
    children?: ReactNode
}

interface tabListObject {
    title:string,
    component: ReactNode
}