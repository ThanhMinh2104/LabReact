import { useState } from "react";
import "../Calculator/Calculator.css";

function Calculator() {
  const [initialMoney, setInitialMoney] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [targetGoal, setTargetGoal] = useState(0);
  const [results, setResults] = useState([]);

  const handleChangeMoney = (e) => {
    setInitialMoney(parseFloat(e.target.value));
  };

  const handleChangeRate = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleChangeGoal = (e) => {
    setTargetGoal(parseFloat(e.target.value));
  };

  const calculateGrowth = () => {
    let year = new Date().getFullYear();
    let currentMoney = initialMoney;
    let futureMoney = currentMoney * (1 + interestRate / 100);

    const newResults = [
      {
        year,
        money: currentMoney,
        rate: interestRate,
        result: futureMoney,
      },
    ];

    while (futureMoney < targetGoal) {
      year++;
      currentMoney = futureMoney;
      futureMoney = currentMoney * (1 + interestRate / 100);
      newResults.push({
        year,
        money: currentMoney,
        rate: interestRate,
        result: futureMoney,
      });
    }

    setResults(newResults);
  };

  return (
    <div className="calculator-container">
      <div className="input-group">
        <label>Initial Money</label>
        <input type="number" onChange={handleChangeMoney} />
      </div>
      <div className="input-group">
        <label>Interest Rate (%)</label>
        <input type="number" onChange={handleChangeRate} />
      </div>
      <div className="input-group">
        <label>Target Goal</label>
        <input type="number" onChange={handleChangeGoal} />
      </div>
      <button className="calculate-button" onClick={calculateGrowth}>
        Calculate
      </button>

      <table className="result-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Money</th>
            <th>Rate (%)</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.money.toFixed(1)}</td>
              <td>{item.rate}</td>
              <td>{item.result.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
