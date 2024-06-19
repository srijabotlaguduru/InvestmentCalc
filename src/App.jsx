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
      return { ...prev, [identifier]: value };
    });
    // onChange(currInvestments)
  }

  // let currInvestments = [];

  // function handleInvestments(value) {
  //   currInvestments = value;
  // }

  return (
    <>
      <Header />
      <Input currInvestments={currInvestments} onChange={handleChangeInput} />
      <Result input={currInvestments} />
    </>
  );
}

export default App;
