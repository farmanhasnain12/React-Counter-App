// import React, {useState,useEffect} from "react";
import "./style.css";
import React , { useEffect, useReducer } from "react";

const   UseReducer = () => {
  // const initialData = 15;
//   const [myNum, setMyNum] = React.useState(0);
  useEffect(()=>{
    document.title= `Chat(${state})`;
  });
function reducer(state,action)
{

    if(action.type==="INCR")
    {
        state=state+1;
    }
    else if(state>0 && action.type==="DECR")
    {
        
        state=state-1;
    }


    return state;

}
  
  const [state,dispath]=useReducer(reducer,0);
  


  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div name="increment" class="button2" onClick={()=>{dispath({type:"INCR"})}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          
          onClick={()=>{dispath({type:"DECR"})}}
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
  
      </div>
    </>
  );
};

export default UseReducer;
