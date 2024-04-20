import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch stored data from local storage
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  });

  const handlePrintPDF = () => {
    if (data) {
      const doc = new jsPDF();

      // Set font size and style
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Get page width
      const pageWidth = doc.internal.pageSize.getWidth();

      // Calculate center position for text
      const centerX = pageWidth / 2;

      // Client Information
      const textOffsetY = 10;
      const lineHeight = 5;
      const clientNameY = textOffsetY + lineHeight;
      const clientCodeY = textOffsetY + 2 * lineHeight;
      const portfolioDateY = textOffsetY + 3 * lineHeight;

      doc.text(`Client name: ${data.clientName}`, centerX, clientNameY, {
        align: "center",
      });
      doc.text(`Client code: ${data.clientCode}`, centerX, clientCodeY, {
        align: "center",
      });
      doc.text(
        `Portfolio as on date: ${data.portfolioDate}`,
        centerX,
        portfolioDateY,
        { align: "center" }
      );

      // STS Table
      doc.autoTable({
        startY: 40,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [
          [
            "Short Term Stocks",
            "Quantity",
            "Purchase Price",
            "Market Price",
            "Market Value",
            "Gain/Loss",
          ],
        ],
        body: data.stsInputValues.map((inputValues) => [
          inputValues.sts,
          inputValues.quantity,
          inputValues.purchasePrice,
          inputValues.marketPrice,
          inputValues.marketValue,
          inputValues.gainLoss,
        ]),
      });

      // LTS Table
      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 10,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [
          [
            "Long Term Stocks",
            "Quantity",
            "Purchase Price",
            "Market Price",
            "Market Value",
            "Gain/Loss",
          ],
        ],
        body: data.ltsInputValues.map((inputValues) => [
          inputValues.lts,
          inputValues.quantity,
          inputValues.purchasePrice,
          inputValues.marketPrice,
          inputValues.marketValue,
          inputValues.gainLoss,
        ]),
      });

      // EMF Table
      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 10,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [
          [
            "Equity MF",
            "Quantity",
            "Purchase Price",
            "Market Price",
            "Market Value",
            "Gain/Loss",
          ],
        ],
        body: data.emfInputValues.map((inputValues) => [
          inputValues.emf,
          inputValues.quantity,
          inputValues.purchasePrice,
          inputValues.marketPrice,
          inputValues.marketValue,
          inputValues.gainLoss,
        ]),
      });

      doc.save("portfolio_details.pdf");
    }
  };

  return (
    <div className="container mx-auto py-10 px-5 lg:px-10">
      <div className="flex flex-col items-center justify-center lg:justify-between">
        {data ? (
          <>
            {/* Add a button for printing PDF */}
            <button
              onClick={handlePrintPDF}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Print PDF
            </button>
            {/* Client Information */}
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

            {/* STS Table */}
            <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
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
                      <td className="px-14 text-xl">
                        {inputValues.purchasePrice}
                      </td>
                      <td className="px-14 text-xl">
                        {inputValues.marketPrice}
                      </td>
                      <td className="px-14 text-xl">
                        {inputValues.marketValue}
                      </td>
                      <td className="px-14 text-xl">{inputValues.gainLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* LTS Table */}
            <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
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
                      <td className="px-14 text-xl">
                        {inputValues.purchasePrice}
                      </td>
                      <td className="px-14 text-xl">
                        {inputValues.marketPrice}
                      </td>
                      <td className="px-14 text-xl">
                        {inputValues.marketValue}
                      </td>
                      <td className="px-14 text-xl">{inputValues.gainLoss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* EMF Table */}
            <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
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
                      <td className="px-14 text-xl">
                        {inputValues.purchasePrice}
                      </td>
                      <td className="px-14 text-xl">
                        {inputValues.marketPrice}
                      </td>
                      <td className="px-14 text-xl">
                        {inputValues.marketValue}
                      </td>
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
