import classes  from './NumberPad.module.css';
import React from 'react';
// import Display,addToScreen from './Display';

function NumberPad(props)
{

    return <div className={classes.numpad}>
        <button value="br" className={classes.bracket} onClick={()=>{props.update("()")}}>()</button>
        <button value="cl" className={classes.clear} onClick={()=>{props.update("cl")}}>C</button>
        <button value="bk" className={classes.back} onClick={()=>{props.update("bk")}}><i className="fas fa-backspace fa-sm"></i></button>
        <button value="%" className={classes.mod} onClick={()=>{props.update("%")}}>%</button>
        <button value="9" className={classes.nine} onClick={()=>{props.update(9)}}>9</button>
        <button value="8" className={classes.eight} onClick={()=>{props.update(8)}}>8</button>
        <button value="7" className={classes.seven} onClick={()=>{props.update(7)}}>7</button>
        <button value="6" className={classes.six} onClick={()=>{props.update(6)}}>6</button>
        <button value="5" className={classes.five} onClick={()=>{props.update(5)}}>5</button>
        <button value="4" className={classes.four} onClick={()=>{props.update(4)}}>4</button>
        <button value="3" className={classes.three} onClick={()=>{props.update(3)}}>3</button>
        <button value="2" className={classes.two} onClick={()=>{props.update(2)}}>2</button>
        <button value="1" className={classes.one} onClick={()=>{props.update(1)}}>1</button>
        <button value="." className={classes.dot} onClick={()=>{props.update(".")}}>.</button>
        <button value="0" className={classes.zero} onClick={()=>{props.update(0)}}>0</button>
        <button value="=" className={classes.equals} onClick={()=>{props.update("=")}}>=</button>
        <button value="+" className={classes.plus} onClick={()=>{props.update("+")}}>+</button>
        <button value="-" className={classes.minus} onClick={()=>{props.update("-")}}>-</button>
        <button value="*" className={classes.multiply} onClick={()=>{props.update("*")}}>x</button>
        <button value="/" className={classes.divide} onClick={()=>{props.update("/")}}>÷</button>
    </div>;
}
export default NumberPad;