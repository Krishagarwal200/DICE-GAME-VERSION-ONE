import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ScoreAndSelect from "./components/ScoreAndSelect";
import HeroComponent from "./components/HeroComponent";

import { useState } from "react";


const App = ({ HomeValue, setHome }) => {
  const [showRulesValue, setShowRules] = useState(false);
  const [DiceValue, setDiceValue] = useState("1.png");
  const [resetValue, setResetValue] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [winState, setWinState] = useState("");
  return (
    <>
      {!HomeValue ? <>< Header ></Header > <Home HomeValue={HomeValue} setHome={setHome}></Home> </> : <> <ScoreAndSelect DiceValue={DiceValue} totalScore={totalScore} setTotalScore={setTotalScore} setResetValue={setResetValue} resetValue={resetValue} setSelectedValue={setSelectedValue} selectedValue={selectedValue}></ScoreAndSelect>
        <HeroComponent setShowRules={setShowRules} showRulesValue={showRulesValue} DiceValue={DiceValue} setDiceValue={setDiceValue} setResetValue={setResetValue} resetValue={resetValue} selectedValue={selectedValue} setSelectedValue={setSelectedValue} totalScore={totalScore} setTotalScore={setTotalScore} winState={winState} setWinState={setWinState}></HeroComponent ></>
      }


    </>
  )
}
export default App;