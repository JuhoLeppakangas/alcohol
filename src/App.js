
import './App.css';
import React, { useState } from 'react';
import Options from './options';

function App() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [AlcoholLevel, setBloodAlcoholLevel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }


    setBloodAlcoholLevel(result.toFixed(2));
  }
  return (
    <>
     <form onSubmit={handleSubmit}>
      <h3>Calculating alcohol blood level</h3>
      
      <label>
        Weight:
        <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
      </label>
      <br/><br/>
      <label>Gender:</label>
      <label>
        Male
        <input type="radio" name="gender" value="male" checked={gender==='male'} onChange={(e)=> setGender(e.target.value)}/>
      </label>
      <label>
        Female
        <input type="radio" name="gender" value="female" checked={gender==='female'} onChange={(e)=> setGender(e.target.value)}/>
      </label>
      <br/><br></br>
      <label>
        Bottles:
        <select value={bottles} onChange={(e)=> setBottles(e.target.value)}>
          <Options min={0} max={15}/>
        </select>
      </label>
      <br/><br></br>
      <label>
        Time:
        <select value={time} onChange={(e)=> setTime(e.target.value)}>
          <Options min={0} max={15}/>
        </select>
      </label>
      <p>Your alcohol blood level is: {AlcoholLevel}</p>
      <br/>
        <button type="submit">Calculate</button>
     </form>
      
    </>
  );
}

export default App;
