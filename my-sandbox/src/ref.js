import { useState, useRef, useEffect } from "react"
import React from "react"

export default function Ref(){
  const firstInput = useRef();
  function focus(){
    firstInput.current.focus()
  }
  return (
    <>
    <input ref={firstInput} type="text" />
    <hr/>
    <p>everything has a cause to the city of god</p>
    <button onClick= {focus}>focus on input</button>
    </>
  )
 
}