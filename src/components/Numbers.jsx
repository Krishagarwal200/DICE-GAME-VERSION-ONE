const Numbers = ({ setSelectedValue }) => {
  const num = [1, 2, 3, 4, 5, 6];
  const handleClick = () => {
    let selectedValue1 = Number(event.srcElement.innerHTML);
    selectedValue1;
    setSelectedValue(selectedValue1);
  }
  return (
    <>
      {num.map(item => <button type="button" className="btn btn-outline-primary cus-btn" onClick={handleClick}>{item}</button>)}
    </>
  )
}
export default Numbers;