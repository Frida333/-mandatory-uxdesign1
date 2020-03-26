import React, {useState} from 'react';
import './App.css';
import TextField from "./TextField";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import Switch from "./Switch";
import  "./switchToggle.css";
import  "./radioButtons.css";
import  "./checkBox.css";


export default function App() {
  const [disabled,setDisabled] = useState(false);
  const [value,setValue] =useState("");

  function onClickDisableForm(e){
    e.preventDefault();
    if(disabled){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  }

  function onChangeFirstName(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function onChangeLastName(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <form className="formContainer">
      <fieldset>
        <legend>Formulär</legend>
        <TextField  disabled={disabled}  onChangeLastName={onChangeLastName} onChangeFirstName={onChangeFirstName}/>
        <Checkbox   disabled={disabled}/>
        <RadioButtons  disabled={disabled}/>
        <Switch  disabled={disabled} />
        <button className="disableButton" onClick={onClickDisableForm}>{disabled ?  'Aktivera formuläret': 'Inaktivera formuläret'}</button>
      </fieldset>
    </form>
  );
}
