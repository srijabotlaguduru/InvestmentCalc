import { calculateInvestmentResults } from "../util/investment";
export default function Result({input}){
  const results = calculateInvestmentResults(input);
  console.log(results)
  return(
    <div id="result"></div>
  )
}