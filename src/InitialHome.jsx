import { useState } from "react";
import App from "./App";

const InitialHome = () => {
  const [HomeValue, setHome] = useState(false);
  return (
    <>
      <App HomeValue={HomeValue} setHome={setHome}></App>
    </>
  )
}
export default InitialHome;