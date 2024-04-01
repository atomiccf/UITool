import React, {useState} from "react";
import {DropdownButton,Form} from "react-bootstrap";
import {DropDownCheckProps} from "./DropDownCheckBox.types";

export const DropDownCheckBox: React.FC<DropDownCheckProps> = ({dropdownName,dropdownList}) => {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedItems({...checkedItems, [event.target.name]: event.target.checked});
    };
    // @ts-ignore
    return (
        <DropdownButton className='p-2'  id="dropdown-basic-button" title={dropdownName}>
            {dropdownList.map((item, index) => (
                    <Form.Check
                        className='pr-sm-4 m-2'
                        key={index}
                        type="checkbox"
                        id={`checkbox-${index}`}
                        label={item}
                        name={item}
                        checked={checkedItems[item]}
                        onChange={handleCheckChange}
                    />
            ))}
        </DropdownButton>
    )
}