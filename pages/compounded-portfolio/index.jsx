"use client";
import Button from "@/components/Button";
import { useState } from "react";

// Function to format numbers in Indian numbering system style
const formatNumber = (number) => {
  if (typeof number === "string") return number;
  const formattedNumber = new Intl.NumberFormat("en-IN").format(number);
  return formattedNumber;
};

const PortfolioCalculator = () => {
  const [sipAmount, setSipAmount] = useState(10000); // Initial value
  const [currentPortfolio, setCurrentPortfolio] = useState(100000);
  const [growthRate, setGrowthRate] = useState(14); // Growth rate in percentage
  const [period, setPeriod] = useState(40); // Default period set to 40
  const [portfolioValues, setPortfolioValues] = useState([]);

  const handleSipAmountChange = (e) => {
    if (e.target.value) {
      // Check if there's a value
      const cleanedValue = e.target.value.replace(/,/g, "");
      setSipAmount(parseFloat(cleanedValue));
    }
  };

  const handleCurrentPortfolioChange = (e) => {
    if (e.target.value) {
      // Check if there's a value
      const cleanedValue = e.target.value.replace(/,/g, "");
      setCurrentPortfolio(parseFloat(cleanedValue));
    }
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
    let previousPortfolioValue = currentPortfolio; // Initial portfolio value

    for (let i = 1; i <= period; i++) {
      const futureValue = previousPortfolioValue * (1 + growthRate / 100);
      const sipAmountValue = parseFloat(
        sipAmount?.toString().replace(/,/g, "") || 0
      ); // Optional chaining and default

      let initialInvestment;
      if (i === 1) {
        initialInvestment = currentPortfolio; // Use currentPortfolio for first year
      } else {
        initialInvestment = calculatedValues[i - 2]?.portfolioAmount; // Previous portfolio amount4
      }

      const futureValueWithoutComma = parseFloat(
        futureValue.toString().replace(/,/g, "")
      );
      const portfolioAmount = sipAmountValue * 12 + futureValueWithoutComma;

      calculatedValues.push({
        period: i,
        initialValue: formatNumber(initialInvestment),
        futureValue: formatNumber(futureValue),
        sipAmount: formatNumber(sipAmountValue),
        growthRate: growthRate.toFixed(1),
        portfolioValue: formatNumber(previousPortfolioValue),
        multiplier: formatNumber(multiplier(growthRate)),
        portfolioAmount: formatNumber(portfolioAmount),
      });

      previousPortfolioValue = portfolioAmount; // Update for next iteration
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
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5">
                    Value
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Annual SIP Investment
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Portfolio Amount
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
                      {Math.round(
                        parseFloat(data.initialValue.replace(/,/g, ""))
                      )}
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
                      {Math.round(
                        parseFloat(data.futureValue.replace(/,/g, ""))
                      )}
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
                      {Math.round(
                        parseFloat(data.portfolioAmount.replace(/,/g, ""))
                      )}
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
