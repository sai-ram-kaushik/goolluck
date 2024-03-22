// components/PortfolioCalculator.js

import Button from "@/components/Button";
import { useState } from "react";

// Function to format numbers in Indian numbering system style
const formatNumber = (number) => {
  const formattedNumber = new Intl.NumberFormat("en-IN").format(number);
  return formattedNumber;
};

const PortfolioCalculator = () => {
  const [sipAmount, setSipAmount] = useState(10000);
  const [currentPortfolio, setCurrentPortfolio] = useState(100000);
  const [growthRate, setGrowthRate] = useState(14); // Growth rate in percentage
  const [portfolioValues, setPortfolioValues] = useState([]);

  const handleSipAmountChange = (e) => {
    // Remove commas from the input value before updating state
    const cleanedValue = e.target.value.replace(/,/g, '');
    setSipAmount(parseFloat(cleanedValue));
  };
  

  const handleCurrentPortfolioChange = (e) => {
    // Remove commas from the input value before updating state
    const cleanedValue = e.target.value.replace(/,/g, '');
    setCurrentPortfolio(parseFloat(cleanedValue));
  };

  const handleGrowthRateChange = (e) => {
    // Since growth rate is input as percentage, round it to the tens digit when setting state
    setGrowthRate(Math.round(parseFloat(e.target.value) * 10) / 10);
  };

  const calculatePortfolioValues = () => {
    const periods = 40;

    const calculatedValues = [];
    let currentValue = currentPortfolio;

    for (let i = 1; i <= periods; i++) {
      const futureValue = currentValue * (1 + growthRate / 100);
      currentValue += sipAmount;
      calculatedValues.push({
        period: i,
        initialValue: formatNumber(currentValue - sipAmount), // Format numbers with Indian numbering system style
        futureValue: formatNumber(futureValue), // Format numbers with Indian numbering system style
        sipAmount: formatNumber(sipAmount), // Format numbers with Indian numbering system style
        growthRate: growthRate.toFixed(1), // Display growth rate up to the tens digit
        portfolioValue: formatNumber(currentValue), // Format numbers with Indian numbering system style
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

          <p>Growth Rate (in Percentage):</p>
          <input
            type="number"
            step="0.1"
            min="0"
            max="100" // Maximum value for percentage
            className="input-field"
            value={growthRate} // Display growth rate up to the tens digit
            onChange={handleGrowthRateChange}
          />

          <Button onClick={calculatePortfolioValues}>Calculate</Button>
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
                    {data.initialValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.futureValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.sipAmount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.growthRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-black">
                    {data.portfolioValue}
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
