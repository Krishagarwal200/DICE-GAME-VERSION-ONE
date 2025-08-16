import Numbers from "./Numbers";

const ScoreAndSelect = ({ totalScore, setTotalScore, setResetValue, resetValue, setSelectedValue }) => {

  if (resetValue === true) {
    totalScore = 0;
    setTotalScore(totalScore);
    resetValue = false;
    setResetValue(resetValue);
  }
  return (
    <>

      <div className="score-and-select">
        <div className="Score">
          <p className="Value">{totalScore}</p>
          <p className="Lower">Total Score</p>
        </div>
        <div className="numbers">
          <Numbers setSelectedValue={setSelectedValue}></Numbers>
          <h1>Select Number</h1>
        </div >
      </div >
    </>
  )
}
export default ScoreAndSelect;
