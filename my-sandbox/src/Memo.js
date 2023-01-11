import { useState, useMemo } from "react";
import React from "react";
export default function Memo(){
     const [todo,setTodo]= useState("");
     const [count,setcount]= useState(0);

     function memosFunction () {
        console.log("Calculating...");
      let  num=0;
        for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        console.log(num)
    }
     const memoUse = useMemo(memosFunction,[count])
     function addToDoes(e){
        return setTodo( e.target.value);
         }
      
  return( <>
       <input onChange={addToDoes}/>
        <p>{todo }</p>
          <button onClick={(()=>{setcount(count +1)})}> click me</button>
          <p>{count}</p>
          {memoUse}
          </>)
}
    
