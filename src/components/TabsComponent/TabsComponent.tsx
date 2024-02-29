import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {TabComponentProps} from "./TabsComponent.types";

export const TabsComponent:React.FC<TabComponentProps> = ({tabsList,handleSelect}) => {

    return(
        <Tabs
        id="controlled-tab-example"
        onSelect={handleSelect}
        className="mb-3"
        >
        {tabsList.map((item) => (<Tab key={item.title} eventKey={item.title} title={item.title}>{item.component}</Tab>))}
        </Tabs>
    )

}