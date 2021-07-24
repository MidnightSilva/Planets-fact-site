import React from 'react'

const Button = (props) => {
    const handleClick = () => {
      if (props.onClick) {
        props.onClick(props.value);
      }
    };
    return <button onClick={handleClick}>{props.name}</button>;
}

export default Button;