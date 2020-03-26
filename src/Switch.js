import React from "react";


export default function Switch({disabled}){
  return(
    <div className="switchContainer">
      <label className="switch">
        <input
         type="checkbox"
         disabled={disabled}
         />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
