import { useState } from "react";
const initialState = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
export default function Input({onChange}) {
  const [currInvestments, setCurrentInv] = useState(initialState);

  function handleChangeInput(identifier, value) {
    setCurrentInv((prev) => {
      return { ...prev, [identifier]: value };
    });
    onChange(currInvestments)
  }
  return (
    <div id="user-input">
      <table>
        <tr className="input-group">
          <td>
            <label id="user-input" htmlFor="input">
              Initial Investment
            </label>
            <input
              id="user-input"
              type="number"
              value={currInvestments.initialInvestment}
              onChange={(event)=>handleChangeInput('initialInvestment', event.target.value)}
            />
          </td>
          <td>
            <label id="user-input" htmlFor="input">
              Annual Investment
            </label>
            <input
              id="user-input"
              type="number"
              value={currInvestments.annualInvestment}
              onChange={(event)=>handleChangeInput('annualInvestment', event.target.value)}
            />
          </td>
        </tr>
        <tr className="input-group">
          <td>
            <label id="user-input" htmlFor="input">
              Expected Return
            </label>
            <input
              id="user-input"
              type="number"
              value={currInvestments.expectedReturn}
              onChange={(event)=>handleChangeInput('expectedReturn', event.target.value)}
            />
          </td>
          <td>
            <label id="user-input" htmlFor="input">
              Duration
            </label>
            <input
              id="user-input"
              type="number"
              value={currInvestments.duration}
              onChange={(event)=>handleChangeInput('duration', event.target.value)}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
