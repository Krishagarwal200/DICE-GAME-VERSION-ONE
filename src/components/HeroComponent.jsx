import { useState } from "react";
import ShowRules from "./ShowRules";

const HeroComponent = ({
  showRulesValue, setShowRules, DiceValue, setDiceValue, resetValue, setResetValue, setSelectedValue, selectedValue, totalScore, setTotalScore, winState, setWinState }) => {



  const handleShowRules = () => {
    setShowRules(!showRulesValue);
  }


  const handleRandom = () => {
    if (selectedValue === 0) {
      alert("SELECT A NUMBER TO BEGIN");
      return;
    }
    let num1 = (Math.floor(Math.random() * 6) + 1);
    let num = num1.toString();
    let image_name = num + '.png';
    // console.log(image_name);
    setDiceValue(image_name);


    // console.log(num1);
    if (selectedValue !== 0 && num1 === selectedValue) {
      totalScore++;
      setWinState("WIN");
    }
    else if (selectedValue !== 0 && num1 !== selectedValue) {
      totalScore--;
      setWinState("LOSS");
    }
    setTotalScore(totalScore);

  }


  const handleResetButton = () => {
    resetValue = true;
    setResetValue(resetValue);

  }
  // console.log(image_name);
  return (
    <div class="hero-upper">
      < div className="hero-component">
        <center>
          <img src={DiceValue} onClick={handleRandom}></img>
        </center>

        <div className="d-grid gap-2">
          <button className="btn btn-danger" type="button" onClick={handleResetButton}>RESET SCORE</button>
          <button className="btn btn-primary" type="button" onClick={handleShowRules}>Show RULES</button>

        </div>
        <div><h1>You Selected: {selectedValue}</h1></div>
      </div >
      <div><h1>You {winState}</h1></div>
      {showRulesValue ? <ShowRules></ShowRules> : <h1></h1>}
    </div >

  )
}
export default HeroComponent;