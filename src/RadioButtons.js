import React from "react";


export default function RadioButtons({disabled}){
  return(
    <div className="radioButtonsContainer">
      <p>Är du nöjd med formuläret?</p>
      <label className="containerRadio">Ja
        <input
          type="radio"
          name="radio"
          disabled={disabled}
        />
      <span className="radio"></span>
      </label>
      <label className="containerRadio">Nej
        <input
          type="radio"
          name="radio"
          disabled={disabled}
        />
      <span className="radio"></span>
      </label>
    </div>
  )
}
