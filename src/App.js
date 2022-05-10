import React from "react";
import "./style.css";

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
  
function App() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
  
    const handleChange =(e)=>{
      setName(e.target.value);
    }

    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
        
        alert("password Not Match");
      }
      else{
        
        alert('O nome digitado:"' + name +
        '" ,idade :"'+age +'" e o Email:"' + email + '"');
      }
      e.preventDefault();
  
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {}
    <h2> Formulário </h2>
    <h3> Formulário </h3>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hammer_and_sickle_transparent.svg/1200px-Hammer_and_sickle_transparent.svg.png"/>
        <label >
          Nome:
        </label><br/>
        <input type="text" value={name} required onChange={(e) 
              => {handleChange(e)}} /><br/>
          { }
        <label >
          Idade:
        </label><br/>
        <input type="text" value={age} required onChange={(e)
               => {handleAgeChange(e)}} /><br/>
            { }
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e) 
                => {handleEmailChange(e)}} /><br/>
          {}
        <label>
          Senha:      </label><br/>
        <input type="password" value={password} required onChange={(e) 
               => {handlePasswordChange(e)}} /><br/>
              {}
        <label>
          Confirme a Senha:
        </label><br/>
        <input type="password" value={confPassword} required onChange={(e) 
               => {handleConfPasswordChange(e)}} /><br/>
                {}
        <input type="submit" value="Enviar"/>
      </form>
    </header>
    </div>
  );
}
  
export default App;