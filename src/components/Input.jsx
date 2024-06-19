
export default function Input({onChange, currInvestments}) {

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
              onChange={(event)=>onChange('initialInvestment', event.target.value)}
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
              onChange={(event)=>onChange('annualInvestment', event.target.value)}
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
              onChange={(event)=>onChange('expectedReturn', event.target.value)}
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
              onChange={(event)=>onChange('duration', event.target.value)}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
