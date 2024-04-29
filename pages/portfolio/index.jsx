import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clientsData from "@/constants/clientData.json"; // Update the path to your clients.json file

const Index = () => {
  const [clientName, setClientName] = useState("");
  const [clientCode, setClientCode] = useState("");
  const [portfolioDate, setPortfolioDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [suggestedClients, setSuggestedClients] = useState([]);

  const [stsInputValues, setStsInputValues] = useState([
    {
      sts: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    },
  ]);

  const [ltsInputValues, setLtsInputValues] = useState([
    {
      lts: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    },
  ]);

  const [emfInputValues, setEmfInputValues] = useState([
    {
      emf: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    },
  ]);

  const [bondsInputValues, setBondsInputValues] = useState([
    {
      bonds: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    },
  ]);

  const [mutualFundInputValues, setMfInputValues] = useState([
    {
      mf: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    },
  ]);

  const [etfInputValues, setEtfInputValues] = useState([
    {
      etf: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    },
  ]);

  useEffect(() => {
    // Fetch data from local storage or API
    fetchData().then(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    // Filter clients based on search input
    if (searchInput.trim() !== "") {
      const filteredClients = clients.filter((client) =>
        client.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestedClients(filteredClients);
    } else {
      setSuggestedClients([]);
    }
  }, [searchInput]);

  const fetchData = async () => {
    // Simulated API call or data retrieval
    // Replace with actual data fetching logic
    setPortfolioDate("2024-04-09");
    setClients(clientsData); // Set client data from JSON file
  };

  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    const updatedInputValues = [...type];
    updatedInputValues[index][name] = value;
    type === stsInputValues
      ? setStsInputValues(updatedInputValues)
      : type === ltsInputValues
      ? setLtsInputValues(updatedInputValues)
      : setEmfInputValues(updatedInputValues);
  };

  const handleInputChangeDebt = (e, index, type) => {
    const { name, value } = e.target;
    const updatedInputValues = [...type];
    updatedInputValues[index][name] = value;
    type === bondsInputValues
      ? setBondsInputValues(updatedInputValues)
      : type === mutualFundInputValues
      ? setMfInputValues(updatedInputValues)
      : setEtfInputValues(updatedInputValues);
  };

  const router = useRouter();

  const handleAddInput = (type) => {
    const newItem = {
      sts: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    };
    switch (type) {
      case "sts":
        setStsInputValues([...stsInputValues, newItem]);
        break;
      case "lts":
        setLtsInputValues([...ltsInputValues, newItem]);
        break;
      case "emf":
        setEmfInputValues([...emfInputValues, newItem]);
        break;
      default:
        break;
    }
  };

  const handleAddInputDebt = (type) => {
    const newItem = {
      bonds: "",
      quantity: "",
      purchasePrice: "",
      marketPrice: "",
      marketValue: "",
      gainLoss: "",
    };
    switch (type) {
      case "bonds":
        setBondsInputValues([...bondsInputValues, newItem]);
        break;
      case "mutualFunds":
        setMfInputValues([...mutualFundInputValues, newItem]);
        break;
      case "etf":
        setEtfInputValues([...etfInputValues, newItem]);
        break;
      default:
        break;
    }
  };

  const handleClientSelection = (selectedClient) => {
    setClientName(selectedClient.name);
    setClientCode(selectedClient.code);
    setSuggestedClients([]);
  };

  const handleSubmit = () => {
    const formData = {
      clientName,
      clientCode,
      portfolioDate,
      stsInputValues,
      ltsInputValues,
      emfInputValues,
      bondsInputValues,
      mutualFundInputValues,
      etfInputValues,
    };

    // Store form data in local storage
    localStorage.setItem("portfolioData", JSON.stringify(formData));

    // Redirect to data.jsx with the same data
    router.push(`/portfolio/data`);
  };

  return (
    <div className="py-5 overflow-x-hidden">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex items-center justify-center gap-5">
          <input
            placeholder="Client Name"
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <input
            placeholder="Client Code"
            type="text"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
          />
        </div>
        <input
          type="date"
          value={portfolioDate}
          onChange={(e) => setPortfolioDate(e.target.value)}
          className="mt-3 p-2 rounded-xl text-sm bg-background border border-secondary"
        />
      </div>

      <div className=" mt-3">
        <div className="h-8 bg-secondary flex justify-end items-center w-full">
          <h4 className=" px-16 text-xl font-bold">EQUITY</h4>
        </div>

        <table className="mt-5 max-w-[1080px]">
          <thead className="text-center">
            <tr>
              <th className="text-sm">Short Term Stocks</th>
              <th className="text-sm">Quantity</th>
              <th className="text-sm">Purchase Price</th>
              <th className="text-sm">Market Price</th>
              <th className="text-sm">Market Value</th>
              <th className="text-sm">Gain/Loss</th>
              <th className=" ">
                <button
                  onClick={() => handleAddInput("sts")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {stsInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-20 py-3">
                  <input
                    type="text"
                    name="sts"
                    value={inputValues.sts}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="min-w-[250px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* lts table */}
        <table className="">
          <thead className="text-center">
            <tr>
              <th className="  text-sm">Long Term Stocks</th>
              <th className="  text-sm">Quantity</th>
              <th className="  text-sm">Purchase Price</th>
              <th className="  text-sm">Market Price</th>
              <th className="  text-sm">Market Value</th>
              <th className="  text-sm">Gain/Loss</th>
              <th className=" ">
                <button
                  onClick={() => handleAddInput("lts")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {ltsInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-20 py-3">
                  <input
                    type="text"
                    name="lts"
                    value={inputValues.lts}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="min-w-[250px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* emf */}
        <table className="">
          <thead className="text-center">
            <tr>
              <th className="  text-sm">Equity MF</th>
              <th className="  text-sm">Quantity</th>
              <th className="  text-sm">Purchase Price</th>
              <th className="  text-sm">Market Price</th>
              <th className="  text-sm">Market Value</th>
              <th className="  text-sm">Gain/Loss</th>
              <th className=" ">
                <button
                  onClick={() => handleAddInput("emf")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {emfInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-20 py-3">
                  <input
                    type="text"
                    name="emf"
                    value={inputValues.emf}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="min-w-[250px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* debt heading */}
        <div className="h-8 bg-secondary flex justify-end items-center mt-2">
          <h4 className=" px-16 text-xl font-bold">DEBT</h4>
        </div>

        <table className="mt-5">
          <thead className="text-center">
            <tr>
              <th className="  text-sm">Bonds</th>
              <th className="  text-sm">Quantity</th>
              <th className="  text-sm">Purchase Price</th>
              <th className="  text-sm">Market Price</th>
              <th className="  text-sm">Market Value</th>
              <th className="  text-sm">Gain/Loss</th>
              <th className=" ">
                <button
                  onClick={() => handleAddInputDebt("bonds")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bondsInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-20 py-3">
                  <input
                    type="text"
                    name="bonds"
                    value={inputValues.bonds}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="min-w-[250px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* mutual funds table */}

        <table className="">
          <thead className="text-center">
            <tr>
              <th className="  text-sm">Mutual Funds</th>
              <th className="  text-sm">Quantity</th>
              <th className="  text-sm">Purchase Price</th>
              <th className="  text-sm">Market Price</th>
              <th className="  text-sm">Market Value</th>
              <th className="  text-sm">Gain/Loss</th>
              <th className=" ">
                <button
                  onClick={() => handleAddInputDebt("mf")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {mutualFundInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-20 py-3">
                  <input
                    type="text"
                    name="mf"
                    value={inputValues.mf}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="min-w-[250px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* etf table */}

        <table className="">
          <thead className="text-center">
            <tr>
              <th className="  text-sm">ETF&apos;s</th>
              <th className="  text-sm">Quantity</th>
              <th className="  text-sm">Purchase Price</th>
              <th className="  text-sm">Market Price</th>
              <th className="  text-sm">Market Value</th>
              <th className="  text-sm">Gain/Loss</th>
              <th className=" ">
                <button
                  onClick={() => handleAddInputDebt("etf")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {etfInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-20 py-3">
                  <input
                    type="text"
                    name="etf"
                    value={inputValues.etf}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="min-w-[250px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
                <td className="px-10 py-2">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-[120px] p-0 rounded-xl text-sm bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mb-10">
          <button
            onClick={handleSubmit}
            className="mt-10 p-3 bg-secondary min-w-[250px] text-white rounded-xl hover:bg-background border-2 border-secondary duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
