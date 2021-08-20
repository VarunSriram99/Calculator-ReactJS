import React, { useEffect, useRef, useState } from 'react'
import classes from './Display.module.css'




function Display(props)
{
  const [br,setBr]= useState(true) 
  const inputData=useRef(null);
  useEffect(()=>{ if(inputData.current){
    if(props.val!=null)
    {
      if(window.innerWidth>768)
        inputData.current.focus();
    if(props.val=="cl")
    inputData.current.value="";
    else if(props.val=="bk"){
      inputData.current.value=inputData.current.value.substr(0,(inputData.current.value.length-1))
    }
    else if(props.val=="()")
    {
      if(br)
      {
        inputData.current.value+="(";
        setBr(false)
      }
      else{
        inputData.current.value+=")";
        setBr(true)
      }
    }
    else if(props.val=="="){
      const regex=/((\d+(\.\d{1,})?)([+-\/*\%](\d+(\.\d{1,})?))*)|([+-\/*\%]{1}\(?(\d+(\.\d{1,})?)([+-\/*\%](\d+(\.\d{1,})?))*\)?)/gm;
      let y=inputData.current.value;
      y=y.replaceAll(regex,'')
      console.log(y+" after regex")
      if( y=="" )
      {inputData.current.value=eval(inputData.current.value);}
      else{
        inputData.current.value="";
        alert("Invalid calculation")
      } 
    }
    else
    inputData.current.value+=(props.val).toString();
    }
    check();
    
    
  }},[props.upd])


  function check(e){
    const x=e?e.target:inputData.current;
   if(x.value.length>15)
   {
      x.style.fontSize = (13-(x.value.length/4)).toString()+"vw";
   }
   else{
    x.style.fontSize = "11vw";
   }
   if (parseInt(x.style.fontSize) < 4) {
    x.style.fontSize= "4vw" ;   
    x.value=x.value.substr(0,42)
    }
  }
  return <div className={classes.container}>
      <form className={classes.form}>
          <input ref={inputData} type="text" className={classes.text} onChange={check} autoFocus/>
      </form>
  </div>  
}
export default Display;