import React from "react";


export const Start = (props) => {
    return (
        <button onClick={props.onClick} className='start'>{props.text}</button>
    );
}

export const Commentary = (props) => {
    let text;
    const wontoss = Math.random();
    const toss = () => {
        if (wontoss <= 0.35) {
            text = `'${props.home} won the toss and elected to bat first'`
        } else if (wontoss > 0.35 <= 0.5) {
            text = `'${props.home} won the toss and elected to bowl first'`
        } else if (wontoss > 0.5 <= 0.85) {
            text = `'${props.away} won the toss and elected to bat first'`
        } else {
            text = `'${props.away} won the toss and elected to bowl first'`
        }
        return text
    }
    
    const wonToss = toss();
    return (
        <div id='commentary'>{wonToss}</div>
    )
}

// >Welcome to this game between {props.home} and {props.away}. The captain's are on their way out to make the toss.
 