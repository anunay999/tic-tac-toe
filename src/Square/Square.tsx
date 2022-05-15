import React, {FunctionComponent} from 'react';
import Button from 'react-bootstrap/Button';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    value: string;
}

const Square = (props:Props) =>{

    const getVariant = (value:string) : string => {
        if(value === null) return "info"
        return value==="X"? "danger": "warning";
    }

    return (
        <Button className="box" variant={ getVariant(props.value) } onClick={props.onClick}>{props.value}</Button>
    )
}

export default Square;
