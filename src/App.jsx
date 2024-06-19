import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  

  //  console.log(results.map((item)=> item.map((val)=>val)))
  let currInvestments = [];

  function handleInvestments(value) {
    currInvestments = value;
  }

  return (
    <>
      <Header />
      <Input onChange={handleInvestments} />
      <Result input={currInvestments} />
    </>
  );
}

export default App;
