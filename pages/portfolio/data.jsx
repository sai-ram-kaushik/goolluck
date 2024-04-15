import React, { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch stored data from local storage
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  return (
    <div className="container mx-auto py-10 px-5 lg:px-10">
      <div className="flex flex-col items-center justify-center lg:justify-between">
        {data ? (
          <>
            {/* First div for client information */}
            <div className="mb-10 lg:mb-0 lg:mr-10 w-full lg:w-1/2">
              <div className="flex flex-col items-center gap-5">
                <h3 className="text-2xl font-bold">
                  Client name: <span>{data.clientName}</span>
                </h3>
                <h4 className="text-xl font-bold">
                  Client code: <span>{data.clientCode}</span>
                </h4>
                <p className="text-xl font-bold">
                  Portfolio as on date: <span>{data.portfolioDate}</span>
                </p>
              </div>
            </div>

            {/* Second div for STS, LTS, EMF data */}
            <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
              {/* STS Table */}
              <table className="table-auto" id="sts">
                <thead>
                  <tr>
                    <th colSpan="6" className="font-bold text-2xl mb-10">
                      Short Term Stocks
                    </th>
                  </tr>
                  <tr className="text-secondary">
                    <th className="text-xl">Short Term Stocks</th>
                    <th className="px-14 py-5 text-xl">Quantity</th>
                    <th className="px-14 py-5 text-xl">Purchase Price</th>
                    <th className="px-14 py-5 text-xl">Market Price</th>
                    <th className="px-14 py-5 text-xl">Market Value</th>
                    <th className="px-14 py-5 text-xl">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {data.stsInputValues.map((inputValues, index) => (
                    <tr key={index}>
                      <td>{inputValues.sts}</td>
                      <td className="px-14 text-xl">{inputValues.quantity}</td>
                      <td className="px-14 text-xl">{inputValues.purchasePrice}</td>
                      <td className="px-14 text-xl">{inputValues.marketPrice}</td>
                      <td className="px-14 text-xl">{inputValues.marketValue}</td>
                      <td className="px-14 text-xl">{inputValues.gainLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* LTS Table */}
              <table className="table-auto" id="lts">
                <thead>
                  <tr>
                    <th colSpan="6" className="font-bold mb-10 text-2xl">
                      Long Term Stocks
                    </th>
                  </tr>
                  <tr className="text-secondary">
                    <th className="text-xl">Long Term Stocks</th>
                    <th className="px-14 py-5 text-xl">Quantity</th>
                    <th className="px-14 py-5 text-xl">Purchase Price</th>
                    <th className="px-14 py-5 text-xl">Market Price</th>
                    <th className="px-14 py-5 text-xl">Market Value</th>
                    <th className="px-14 py-5 text-xl">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {data.ltsInputValues.map((inputValues, index) => (
                    <tr key={index}>
                      <td>{inputValues.lts}</td>
                      <td className="px-14 text-xl">{inputValues.quantity}</td>
                      <td className="px-14 text-xl">{inputValues.purchasePrice}</td>
                      <td className="px-14 text-xl">{inputValues.marketPrice}</td>
                      <td className="px-14 text-xl">{inputValues.marketValue}</td>
                      <td className="px-14 text-xl">{inputValues.gainLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* EMF Table */}
              <table className="table-auto" id="emf">
                <thead>
                  <tr>
                    <th colSpan="6" className="font-bold mb-10 text-2xl">
                      Equity
                    </th>
                  </tr>
                  <tr className="text-secondary">
                    <th className="text-xl">Equity MF</th>
                    <th className="px-14 py-5 text-xl">Quantity</th>
                    <th className="px-14 py-5 text-xl">Purchase Price</th>
                    <th className="px-14 py-5 text-xl">Market Price</th>
                    <th className="px-14 py-5 text-xl">Market Value</th>
                    <th className="px-14 py-5 text-xl">Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {data.emfInputValues.map((inputValues, index) => (
                    <tr key={index}>
                      <td>{inputValues.emf}</td>
                      <td className="px-14 text-xl">{inputValues.quantity}</td>
                      <td className="px-14 text-xl">{inputValues.purchasePrice}</td>
                      <td className="px-14 text-xl">{inputValues.marketPrice}</td>
                      <td className="px-14 text-xl">{inputValues.marketValue}</td>
                      <td className="px-14 text-xl">{inputValues.gainLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-xl font-bold">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Data;


