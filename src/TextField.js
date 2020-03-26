import React from 'react';
import "./textField.css";


export default function TextField({disabled,value,onChangeLastName,onChangeFirstName}){
  return(
    <div>
      <div className="textContainer">
        <input
          type="text"
          disabled={disabled}
          className="textField"
          minLength="0"
          value={disabled ? "" : value}
          onChangeFirstName={onChangeFirstName}
          required
        />
        <label className="name"> Förnamn</label>
        <div className="borderTextContainer"></div>
      </div>
      <div className="textContainer">
        <input
          type="text"
          disabled={disabled}
          value={disabled ? "" : value}
          onChangeLastName={onChangeLastName}
          required
          className="textField"
          minLength="0"
        />
        <label className="name"> Efternamn</label>
        <div className="borderTextContainer"></div>
      </div>
    </div>
  )
}
