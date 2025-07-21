"use client"; // if you're using app directory in Next.js 13+

import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelViewer = () => {
  const [sheets, setSheets] = useState([]);
  const [selectedSheet, setSelectedSheet] = useState("");
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [excelFile, setExcelFile] = useState(null); // Store file in state

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setExcelFile(file); // Save file in state

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });

      const sheetNames = workbook.SheetNames;
      setSheets(sheetNames);

      const firstSheet = sheetNames[0];
      setSelectedSheet(firstSheet);
      parseSheet(workbook, firstSheet);
    };

    reader.readAsBinaryString(file);
  };

  const parseSheet = (workbook, sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    if (jsonData.length > 0) {
      setHeaders(jsonData[0]);
      setData(jsonData.slice(1));
    } else {
      setHeaders([]);
      setData([]);
    }
  };

  const handleSheetChange = (e) => {
    const selected = e.target.value;
    setSelectedSheet(selected);

    if (!excelFile) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      parseSheet(workbook, selected);
    };

    reader.readAsBinaryString(excelFile);
  };

  return (
    <div className="h-screen bg-black text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Excel Sheet Viewer</h2>

      <div className="mb-4">
        <input
          id="excel-file"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700"
        />
      </div>

      {sheets.length > 1 && (
        <div className="mb-4">
          <label className="mr-2 font-medium">Select Sheet:</label>
          <select
            value={selectedSheet}
            onChange={handleSheetChange}
            className="text-black px-2 py-1 rounded"
          >
            {sheets.map((sheet) => (
              <option key={sheet} value={sheet}>
                {sheet}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex-1 overflow-auto border border-gray-700 rounded-lg">
        {headers.length > 0 && (
          <table className="min-w-max border-collapse text-sm w-full">
            <thead className="bg-gray-800 sticky top-0 z-10">
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="border border-gray-700 px-4 py-2 whitespace-nowrap text-left"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-900">
                  {headers.map((_, cIdx) => (
                    <td
                      key={cIdx}
                      className="border border-gray-700 px-4 py-2 whitespace-nowrap"
                    >
                      {row[cIdx] ?? ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExcelViewer;
