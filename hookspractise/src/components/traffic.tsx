import React, { useState } from "react";



export default function TrafficLight(){
    const[walk,setWalk]=useState(true);

    function handleClick(){
      setWalk(!walk);  
      alert(walk ? 'stop is next':'Walk is next')
    }
 /*the code is tsx
  type LightColor = "green" | "red";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    const color: LightColor = walk ? "green" : "red";
    const text = walk ? "Walk" : "Stop";
    if (color === "green" && text === "Walk") {
      alert("Stop is next");
    } else if (color === "red" && text === "Stop") {
      alert("Walk is next");
    }
  }
 the code is jsx 
  function handleClick(){
        setWalk(!walk);
        if(walk || style.color==='green'){
            alert('stop is next');   
        }else if(!walk || style.color==='red'){
            alert('Walk is next')
        }
 
}*/


return(
  <>
  <button onClick={ handleClick }>change to { walk ? 'stop':'walk'}</button>
  <h1 style={{ color: walk ? 'green':'red'}}>
    {walk ? 'walk': 'stop'}
  </h1>
  
  </>
);
}