import React from "react";



export default function Checkbox({disabled}){
  return(
    <div className="checkBoxContainer">
    <p>Husdjur</p>
      <label className="container">Katt
        <input
          type="checkbox"
          disabled={disabled}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">Hund
        <input
          type="checkbox"
          disabled={disabled}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">Kanin
        <input
          type="checkbox"
          disabled={disabled}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}
