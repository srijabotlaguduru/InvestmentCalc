import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";
import { useState } from "react";
const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [currInvestments, setCurrentInv] = useState(initialState);

  function handleChangeInput(identifier, value) {
    setCurrentInv((prev) => {
      return { ...prev, [identifier]: +value };
    });
  
  }

  const inputIsValid = currInvestments.duration >= 1;

  return (
    <>
      <Header />
      <Input currInvestments={currInvestments} onChange={handleChangeInput} />
      {inputIsValid && <Result input={currInvestments} />}
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
    </>
  );
}

export default App;
