// import React, {useState,useEffect} from "react";
import "./style.css";
import React , { useEffect, useState } from "react";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);
  useEffect(()=>{
    document.title= `Chat(${myNum})`;
  });

  function increment()
  {
    setMyNum(myNum+1);

  }
  function decrement()
  {
    if(!myNum==0)
    {
      var temp=myNum-1;
      setMyNum(temp);
    }

    
  }

  


  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div name="increment" class="button2" onClick={increment}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          
          onClick={decrement}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
        {/* <h1> Farman Hasnain</h1> */}
      </div>
    </>
  );
};

export default UseState;
