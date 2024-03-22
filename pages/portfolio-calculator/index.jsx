// components/PortfolioCalculator.js

import Button from "@/components/Button";
import { useState } from "react";

const PortfolioCalculator = () => {
  const [sipAmount, setSipAmount] = useState(50000);
  const [currentPortfolio, setCurrentPortfolio] = useState(3000000);
  const [growthRate, setGrowthRate] = useState(0.14);
  const [portfolioValues, setPortfolioValues] = useState([]);

  const handleSipAmountChange = (e) => {
    setSipAmount(parseFloat(e.target.value));
  };

  const handleCurrentPortfolioChange = (e) => {
    setCurrentPortfolio(parseFloat(e.target.value));
  };

  const handleGrowthRateChange = (e) => {
    setGrowthRate(parseFloat(e.target.value));
  };

  const calculatePortfolioValues = () => {
    const periods = 40;

    const calculatedValues = [];
    let currentValue = currentPortfolio;

    for (let i = 1; i <= periods; i++) {
      const futureValue = currentValue * (1 + growthRate);
      currentValue += sipAmount;
      calculatedValues.push({
        period: i,
        initialValue: currentValue - sipAmount,
        futureValue: futureValue,
        sipAmount: sipAmount,
        growthRate: growthRate,
        portfolioValue: currentValue,
      });
    }

    setPortfolioValues(calculatedValues);
  };

  return (
    <div className="w-full py-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center bg-background shadow-md shadow-secondary p-5 rounded-lg">
          <p>SIP Amount:</p>
          <input
            type="number"
            className="input-field"
            value={sipAmount}
            onChange={handleSipAmountChange}
          />

          <p>Current Portfolio Value:</p>
          <input
            type="number"
            className="input-field"
            value={currentPortfolio}
            onChange={handleCurrentPortfolioChange}
          />

          <p>Growth Rate (in Decimal):</p>
          <input
            type="number"
            step="0.01"
            min="0"
            max="1"
            className="input-field"
            value={growthRate}
            onChange={handleGrowthRateChange}
          />

          <Button children="Calculate" onClick={calculatePortfolioValues} />
        </div>

        <div className="overflow-x-auto mt-4 rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 rounded-xl">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Initial Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Future Value (Adjusted)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SIP Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Portfolio Value (Adjusted)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {portfolioValues.map((data) => (
                <tr key={data.period}>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.initialValue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.futureValue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.sipAmount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {(data.growthRate * 100).toFixed(2)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.portfolioValue.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCalculator;
