import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Data = () => {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    // Fetch stored data from local storage
    const storedData = localStorage.getItem("portfolioData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

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
      const portfolioValueY = textOffsetY + 4 * lineHeight;

      // Add logo to the top right corner
      var img = new Image();
      img.src = "../../public/assets/investor.jpg";
      doc.addImage(img.src, "JPEG", 10, 78, 12, 15);

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
      doc.text(
        `Portfolio Value: ${data.portfolioValue}`,
        centerX,
        portfolioValueY,
        { align: "center" }
      );

      doc.autoTable({
        startY: 40,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [["Equity"]],
      });

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

      // Bonds Table
      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 10,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [
          [
            "Bonds",
            "Quantity",
            "Purchase Price",
            "Market Price",
            "Market Value",
            "Gain/Loss",
          ],
        ],
        body: data.bondsInputValues.map((inputValues) => [
          inputValues.bonds,
          inputValues.quantity,
          inputValues.purchasePrice,
          inputValues.marketPrice,
          inputValues.marketValue,
          inputValues.gainLoss,
        ]),
      });

      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 10,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [
          [
            "Mutual Funds",
            "Quantity",
            "Purchase Price",
            "Market Price",
            "Market Value",
            "Gain/Loss",
          ],
        ],
        body: data.mutualFundInputValues.map((inputValues) => [
          inputValues.mf,
          inputValues.quantity,
          inputValues.purchasePrice,
          inputValues.marketPrice,
          inputValues.marketValue,
          inputValues.gainLoss,
        ]),
      });

      doc.autoTable({
        startY: doc.autoTable.previous.finalY + 10,
        headStyles: { fillColor: [255, 165, 0], textColor: [255, 255, 255] }, // Orange background and white text color
        head: [
          [
            "ETF",
            "Quantity",
            "Purchase Price",
            "Market Price",
            "Market Value",
            "Gain/Loss",
          ],
        ],
        body: data.etfInputValues.map((inputValues) => [
          inputValues.bonds,
          inputValues.quantity,
          inputValues.purchasePrice,
          inputValues.marketPrice,
          inputValues.marketValue,
          inputValues.gainLoss,
        ]),
      });

      doc.save("portfolio_details.pdf");
    } else {
      console.error("Data is undefined.");
    }
  };

  return (
    // <div className="container mx-auto py-10 px-5 lg:px-10">
    //   <div className="flex flex-col items-center justify-center lg:justify-between">
    //     {data ? (
    //       <>
    //         {/* Add a button for printing PDF */}
    //         <button
    //           onClick={handlePrintPDF}
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //         >
    //           Print PDF
    //         </button>
    //         {/* Client Information */}
    //         <div className="mb-10 lg:mb-0 lg:mr-10 w-full lg:w-1/2">
    //           <div className="flex flex-col items-center gap-5">
    //             <h3 className="text-2xl font-bold">
    //               Client name: <span>{data.clientName}</span>
    //             </h3>
    //             <h4 className="text-xl font-bold">
    //               Client code: <span>{data.clientCode}</span>
    //             </h4>
    //             <p className="text-xl font-bold">
    //               Portfolio as on date: <span>{data.portfolioDate}</span>
    //             </p>
    //           </div>
    //         </div>

    //         {/* STS Table */}
    //         <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
    //           <table className="table-auto" id="sts">
    //             <thead>
    //               <tr>
    //                 <th colSpan="6" className="font-bold text-2xl mb-10">
    //                   Short Term Stocks
    //                 </th>
    //               </tr>
    //               <tr className="text-secondary">
    //                 <th className="text-xl">Short Term Stocks</th>
    //                 <th className="px-14 py-5 text-xl">Quantity</th>
    //                 <th className="px-14 py-5 text-xl">Purchase Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Value</th>
    //                 <th className="px-14 py-5 text-xl">Gain/Loss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.stsInputValues.map((inputValues, index) => (
    //                 <tr key={index}>
    //                   <td>{inputValues.sts}</td>
    //                   <td className="px-14 text-xl">{inputValues.quantity}</td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.purchasePrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity -
    //                       inputValues.quantity * inputValues.purchasePrice}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //         {/* LTS Table */}
    //         <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
    //           <table className="table-auto" id="lts">
    //             <thead>
    //               <tr>
    //                 <th colSpan="6" className="font-bold mb-10 text-2xl">
    //                   Long Term Stocks
    //                 </th>
    //               </tr>
    //               <tr className="text-secondary">
    //                 <th className="text-xl">Long Term Stocks</th>
    //                 <th className="px-14 py-5 text-xl">Quantity</th>
    //                 <th className="px-14 py-5 text-xl">Purchase Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Value</th>
    //                 <th className="px-14 py-5 text-xl">Gain/Loss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.ltsInputValues.map((inputValues, index) => (
    //                 <tr key={index}>
    //                   <td>{inputValues.lts}</td>
    //                   <td className="px-14 text-xl">{inputValues.quantity}</td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.purchasePrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity -
    //                       inputValues.quantity * inputValues.purchasePrice}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //         {/* EMF Table */}
    //         <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
    //           <table className="table-auto" id="emf">
    //             <thead>
    //               <tr>
    //                 <th colSpan="6" className="font-bold mb-10 text-2xl">
    //                   Equity MF
    //                 </th>
    //               </tr>
    //               <tr className="text-secondary">
    //                 <th className="text-xl">Equity MF</th>
    //                 <th className="px-14 py-5 text-xl">Quantity</th>
    //                 <th className="px-14 py-5 text-xl">Purchase Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Value</th>
    //                 <th className="px-14 py-5 text-xl">Gain/Loss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.emfInputValues.map((inputValues, index) => (
    //                 <tr key={index}>
    //                   <td>{inputValues.emf}</td>
    //                   <td className="px-14 text-xl">{inputValues.quantity}</td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.purchasePrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity -
    //                       inputValues.quantity * inputValues.purchasePrice}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //         {/* Bonds Table */}
    //         <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
    //           <table className="table-auto" id="bonds">
    //             <thead>
    //               <tr>
    //                 <th colSpan="6" className="font-bold mb-10 text-2xl">
    //                   Bonds
    //                 </th>
    //               </tr>
    //               <tr className="text-secondary">
    //                 <th className="text-xl">Bonds</th>
    //                 <th className="px-14 py-5 text-xl">Quantity</th>
    //                 <th className="px-14 py-5 text-xl">Purchase Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Value</th>
    //                 <th className="px-14 py-5 text-xl">Gain/Loss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.bondsInputValues.map((inputValues, index) => (
    //                 <tr key={index}>
    //                   <td>{inputValues.bonds}</td>
    //                   <td className="px-14 text-xl">{inputValues.quantity}</td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.purchasePrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity -
    //                       inputValues.quantity * inputValues.purchasePrice}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //         <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
    //           <table className="table-auto" id="mf">
    //             <thead>
    //               <tr>
    //                 <th colSpan="6" className="font-bold mb-10 text-2xl">
    //                   Mutual Funds
    //                 </th>
    //               </tr>
    //               <tr className="text-secondary">
    //                 <th className="text-xl">Mutual Funds</th>
    //                 <th className="px-14 py-5 text-xl">Quantity</th>
    //                 <th className="px-14 py-5 text-xl">Purchase Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Value</th>
    //                 <th className="px-14 py-5 text-xl">Gain/Loss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.mutualFundInputValues.map((inputValues, index) => (
    //                 <tr key={index}>
    //                   <td>{inputValues.mf}</td>
    //                   <td className="px-14 text-xl">{inputValues.quantity}</td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.purchasePrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity -
    //                       inputValues.quantity * inputValues.purchasePrice}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>

    //         <div className="table-container mt-5 w-full flex flex-col items-center gap-10">
    //           <table className="table-auto" id="etf">
    //             <thead>
    //               <tr>
    //                 <th colSpan="6" className="font-bold mb-10 text-2xl">
    //                   ETF&apos;s
    //                 </th>
    //               </tr>
    //               <tr className="text-secondary">
    //                 <th className="text-xl">ETF&apos;s</th>
    //                 <th className="px-14 py-5 text-xl">Quantity</th>
    //                 <th className="px-14 py-5 text-xl">Purchase Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Price</th>
    //                 <th className="px-14 py-5 text-xl">Market Value</th>
    //                 <th className="px-14 py-5 text-xl">Gain/Loss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {data.etfInputValues.map((inputValues, index) => (
    //                 <tr key={index}>
    //                   <td>{inputValues.etf}</td>
    //                   <td className="px-14 text-xl">{inputValues.quantity}</td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.purchasePrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity}
    //                   </td>
    //                   <td className="px-14 text-xl">
    //                     {inputValues.marketPrice * inputValues.quantity -
    //                       inputValues.quantity * inputValues.purchasePrice}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </>
    //     ) : (
    //       <p className="text-xl font-bold">No data available.</p>
    //     )}
    //   </div>
    // </div>

    <div className="container mx-auto py-10 px-5 lg:px-10">
      <div className="flex flex-col items-center justify-center gap-3">
        {data ? (
          <>
            {/* client details */}
            <div className="flex flex-col items-center justify-center gap-2">
              <h4 className="text-2xl font-bold">
                {data.clientName} - {data.clientCode}
              </h4>
              <p className="font-bold">Portfolio as on {data.portfolioDate}</p>
            </div>

            {/* tables */}

            <div className="h-8 bg-secondary w-full">
              <div className=" flex items-center w-full h-full justify-between px-5">
                <h4 className=" px-16 text-xl font-bold text-background">
                  EQUITY
                </h4>
                <p className="text-background">Portfolio Value: </p>
              </div>
            </div>

            <table className="min-w-full divide-background rounded-xl">
              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Purchase Price
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5">
                    Market Price
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Market Value
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Gain/Loss
                  </th>
                </tr>
                <tr className="bg-secondary">
                  <th>Short Term Stocks</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-primary">
                {data.stsInputValues.map((inputValues, index) => (
                  <tr key={index} className="text-center text-primary">
                    <td>{inputValues.sts}</td>
                    <td className="text-sm">{inputValues.quantity}</td>
                    <td className="text-sm">{inputValues.purchasePrice}</td>
                    <td className="text-sm">{inputValues.marketPrice}</td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity}
                    </td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity -
                        inputValues.quantity * inputValues.purchasePrice}
                    </td>
                  </tr>
                ))}
              </tbody>

              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                </tr>
                <tr className="bg-secondary">
                  <th>Long Term Stocks</th>
                </tr>
              </thead>

              <tbody className="bg-background divide-y divide-primary">
                {data.ltsInputValues.map((inputValues, index) => (
                  <tr key={index} className="text-center text-primary">
                    <td>{inputValues.lts}</td>
                    <td className="text-sm">{inputValues.quantity}</td>
                    <td className="text-sm">{inputValues.purchasePrice}</td>
                    <td className="text-sm">{inputValues.marketPrice}</td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity}
                    </td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity -
                        inputValues.quantity * inputValues.purchasePrice}
                    </td>
                  </tr>
                ))}
              </tbody>

              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                </tr>
                <tr className="bg-secondary">
                  <th>Equity MF</th>
                </tr>
              </thead>

              <tbody className="bg-background divide-y divide-primary">
                {data.emfInputValues.map((inputValues, index) => (
                  <tr key={index} className="text-center text-primary">
                    <td>{inputValues.emf}</td>
                    <td className="text-sm">{inputValues.quantity}</td>
                    <td className="text-sm">{inputValues.purchasePrice}</td>
                    <td className="text-sm">{inputValues.marketPrice}</td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity}
                    </td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity -
                        inputValues.quantity * inputValues.purchasePrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="h-8 bg-secondary w-full">
              <div className=" flex items-center w-full h-full justify-between px-5">
                <h4 className=" px-16 text-xl font-bold text-background">
                  DEBT
                </h4>
              </div>
            </div>

            <table className="min-w-full divide-background rounded-xl">
              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Purchase Price
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5">
                    Market Price
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Market Value
                  </th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider">
                    Gain/Loss
                  </th>
                </tr>
                <tr className="bg-secondary">
                  <th>Bonds</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-primary">
                {data.bondsInputValues.map((inputValues, index) => (
                  <tr key={index} className="text-center text-primary">
                    <td>{inputValues.bonds}</td>
                    <td className="text-sm">{inputValues.quantity}</td>
                    <td className="text-sm">{inputValues.purchasePrice}</td>
                    <td className="text-sm">{inputValues.marketPrice}</td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity}
                    </td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity -
                        inputValues.quantity * inputValues.purchasePrice}
                    </td>
                  </tr>
                ))}
              </tbody>

              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                </tr>
                <tr className="bg-secondary">
                  <th>Mutual Funds</th>
                </tr>
              </thead>

              <tbody className="bg-background divide-y divide-primary">
                {data.mutualFundInputValues.map((inputValues, index) => (
                  <tr key={index} className="text-center text-primary">
                    <td>{inputValues.mf}</td>
                    <td className="text-sm">{inputValues.quantity}</td>
                    <td className="text-sm">{inputValues.purchasePrice}</td>
                    <td className="text-sm">{inputValues.marketPrice}</td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity}
                    </td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity -
                        inputValues.quantity * inputValues.purchasePrice}
                    </td>
                  </tr>
                ))}
              </tbody>

              <thead className="bg-background text-primary">
                <tr className="text-secondary border-b border-secondary">
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider mr-5"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                  <th className="px-6 py-1 text-center text-xs font-bold  uppercase tracking-wider"></th>
                </tr>
                <tr className="bg-secondary">
                  <th>ETF&apos;s</th>
                </tr>
              </thead>

              <tbody className="bg-background divide-y divide-primary">
                {data.etfInputValues.map((inputValues, index) => (
                  <tr key={index} className="text-center text-primary">
                    <td>{inputValues.etf}</td>
                    <td className="text-sm">{inputValues.quantity}</td>
                    <td className="text-sm">{inputValues.purchasePrice}</td>
                    <td className="text-sm">{inputValues.marketPrice}</td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity}
                    </td>
                    <td className="text-sm">
                      {inputValues.marketPrice * inputValues.quantity -
                        inputValues.quantity * inputValues.purchasePrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-center gap-10 mt-5">
              <button
                className="px-6 py-2 bg-secondary rounded-xl"
                onClick={handlePrintPDF}
              >
                Print PDF
              </button>
              <button className="px-6 py-2 bg-secondary rounded-xl">
                <a href="mailto:sairamkaushik1@gmail.com">Send Mail</a>
              </button>
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
