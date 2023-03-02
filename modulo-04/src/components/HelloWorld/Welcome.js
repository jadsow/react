import React from 'react';
import style from './style.css'

function HelloWorld (props) {
    const date = new Date()
    return <p id={props.id} > {props.name} - {date.getDay()}/{date.getMonth()}/{date.getFullYear()} às {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}:{date.getMilliseconds()} </p>;
}


export default HelloWorld;