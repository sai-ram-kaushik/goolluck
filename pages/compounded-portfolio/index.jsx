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
  const [period, setPeriod] = useState(40); // Default period set to 40
  const [portfolioValues, setPortfolioValues] = useState([]);

  const handleSipAmountChange = (e) => {
    const cleanedValue = e.target.value.replaceAll(",", ""); // Remove commas from the input value
    setSipAmount(parseFloat(cleanedValue));
  };

  const handleCurrentPortfolioChange = (e) => {
    const cleanedValue = e.target.value.replaceAll(",", ""); // Remove commas from the input value
    setCurrentPortfolio(parseFloat(cleanedValue));
  };

  const handleGrowthRateChange = (e) => {
    setGrowthRate(Math.round(parseFloat(e.target.value) * 10) / 10);
  };

  const handlePeriodChange = (e) => {
    setPeriod(parseInt(e.target.value));
  };

  const multiplier = (growthRate) => {
    return 1 + growthRate / 100;
  };

  const calculatePortfolioValues = () => {
    const calculatedValues = [];
    let currentValue = currentPortfolio;

    for (let i = 1; i <= period; i++) {
      const futureValue = currentValue * (1 + growthRate / 100);
      currentValue += sipAmount;
      calculatedValues.push({
        period: i,
        initialValue: formatNumber(currentValue - sipAmount),
        futureValue: formatNumber(futureValue),
        sipAmount: formatNumber(sipAmount),
        growthRate: growthRate.toFixed(1),
        portfolioValue: formatNumber(currentValue),
        multiplier: formatNumber(multiplier(growthRate)),
      });
    }

    setPortfolioValues(calculatedValues);
  };

  return (
    <div className="w-full py-10 px-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center justify-center bg-background shadow-md shadow-secondary p-5 rounded-lg max-h-[500px] md:sticky md:top-20">
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center justify-center gap-2">
                  <p>SIP Amount:</p>
                  <input
                    type="number"
                    className="input-field"
                    value={sipAmount}
                    onChange={handleSipAmountChange}
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <p>Current Portfolio Value:</p>
                  <input
                    type="number"
                    className="input-field"
                    value={currentPortfolio}
                    onChange={handleCurrentPortfolioChange}
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <p>Growth Rate (in Percentage):</p>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    className="input-field min-w-[220px]"
                    value={growthRate}
                    onChange={handleGrowthRateChange}
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <p>Period (in years):</p>
                  <input
                    type="number"
                    min="1"
                    className="input-field"
                    value={period}
                    onChange={handlePeriodChange}
                  />
                </div>

                <Button onClick={calculatePortfolioValues}>Calculate</Button>
              </div>

              <div></div>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center bg-background shadow-md shadow-secondary p-5 rounded-lg max-h-[500px] md:sticky md:top-96">
              <div className="flex justify-center">
                <h4 className="text-2xl font-bold">Summary</h4>
              </div>

              <div className="flex flex-col items-center gap-5">
                <div className="flex items-center gap-2">
                  <p>Expected Amount</p>
                  <p>2,000</p>
                </div>

                <div className="flex items-center gap-2">
                  <p>Amount Invested</p>
                  <p>2,000</p>
                </div>

                <div className="flex items-center gap-2">
                  <p>Wealth Gain</p>
                  <p>2,000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mt-4 rounded-xl border border-secondary">
            <table className="min-w-full divide-background rounded-xl">
              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Years
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Initial Investment
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Growth Rate
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Multiplier
                  </th>

                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    SIP
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Months
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Annual Investments
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Portfolio Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-primary">
                {portfolioValues.map((data, index) => (
                  <tr key={index}>
                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {data.period}
                    </td>
                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {data.initialValue}
                    </td>
                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {data.growthRate}%
                    </td>
                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {data.multiplier}
                    </td>

                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {data.sipAmount}
                    </td>
                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      12
                    </td>
                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {formatNumber(
                        parseFloat(data.sipAmount.replace(/,/g, "")) * 12
                      )}
                    </td>

                    <td
                      className={`px-6 py-0 whitespace-nowrap text-primary ${
                        data.period % 5 === 0 ? "font-bold text-secondary" : ""
                      }`}
                    >
                      {data.futureValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCalculator;
