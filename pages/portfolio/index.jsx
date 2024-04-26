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
    <div className="container mx-auto py-10 px-5 lg:px-10">
      {/* client details */}
      <div className="flex flex-col items-center justify-center min-h-[80px] p-5">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mt-3 p-2 rounded-xl text-xl bg-background border border-secondary"
          />

          {/* Client Code Input */}
          <input
            type="text"
            placeholder="Client Code"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
            className="mt-3 p-2 rounded-xl text-xl bg-background border border-secondary"
          />
        </div>

        {/* Portfolio Date Input */}
        <input
          type="date"
          value={portfolioDate}
          onChange={(e) => setPortfolioDate(e.target.value)}
          className="mt-3 p-2 rounded-xl text-xl bg-background border border-secondary"
        />
      </div>

      {/* table details */}
      <div className="border-2 rounded-xl min-h-screen mt-10">
        <h4 className="text-4xl font-bold w-full bg-secondary rounded-xl flex justify-end px-16">
          EQUITY
        </h4>

        {/* Short Term stocks table */}
        <table className="flex flex-col mt-8">
          <thead className="flex">
            <tr>
              <th className="px-24 py-3">Short Term Stocks</th>
              <th className="px-16 py-3">Quantity</th>
              <th className="px-20 py-3">Purchase Price</th>
              <th className="px-16 py-3">Market Price</th>
              <th className="px-16 py-3">Market Value</th>
              <th className="px-5 py-3">Gain/Loss</th>
              <th>
                <button
                  onClick={() => handleAddInput("sts")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center">
            {stsInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-24 py-3">
                  <input
                    type="text"
                    name="sts"
                    value={inputValues.sts}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChange(e, index, stsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* long term stocks table */}

        <table className="flex flex-col mt-8">
          <thead className="flex">
            <tr>
              <th className="px-24 py-3">Long Term Stocks</th>
              <th className="px-16 py-3">Quantity</th>
              <th className="px-20 py-3">Purchase Price</th>
              <th className="px-16 py-3">Market Price</th>
              <th className="px-16 py-3">Market Value</th>
              <th className="px-5 py-3">Gain/Loss</th>
              <th>
                <button
                  onClick={() => handleAddInput("lts")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center">
            {ltsInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-24 py-3">
                  <input
                    type="text"
                    name="lts"
                    value={inputValues.lts}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChange(e, index, ltsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Equity MF table */}

        <table className="flex flex-col mt-8">
          <thead className="flex">
            <tr>
              <th className="px-32 py-3">Equity MF</th>
              <th className="px-16 py-3">Quantity</th>
              <th className="px-20 py-3">Purchase Price</th>
              <th className="px-16 py-3">Market Price</th>
              <th className="px-16 py-3">Market Value</th>
              <th className="px-5 py-3">Gain/Loss</th>
              <th>
                <button
                  onClick={() => handleAddInput("emf")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center">
            {emfInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-24 py-3">
                  <input
                    type="text"
                    name="emf"
                    value={inputValues.emf}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChange(e, index, emfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="text-4xl font-bold w-full bg-secondary rounded-xl flex justify-end px-16 mt-10">
          DEBT
        </h4>

        {/* Bonds table */}

        <table className="flex flex-col mt-8">
          <thead className="flex">
            <tr>
              <th className="px-36 py-3">Bonds</th>
              <th className="px-16 py-3">Quantity</th>
              <th className="px-20 py-3">Purchase Price</th>
              <th className="px-16 py-3">Market Price</th>
              <th className="px-16 py-3">Market Value</th>
              <th className="px-5 py-3">Gain/Loss</th>
              <th>
                <button
                  onClick={() => handleAddInputDebt("bonds")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center">
            {bondsInputValues.map((inputValue, index) => (
              <tr key={index}>
                <td className="px-24 py-3">
                  <input
                    type="text"
                    name="bonds"
                    value={inputValue.bonds}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValue.quantity}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValue.purchasePrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValue.marketPrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValue.marketValue}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValue.gainLoss}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, bondsInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mutual Funds table */}

        <table className="flex flex-col mt-8">
          <thead className="flex">
            <tr>
              <th className="px-28 py-3">Mutual Funds</th>
              <th className="px-16 py-3">Quantity</th>
              <th className="px-20 py-3">Purchase Price</th>
              <th className="px-16 py-3">Market Price</th>
              <th className="px-16 py-3">Market Value</th>
              <th className="px-5 py-3">Gain/Loss</th>
              <th>
                <button
                  onClick={() => handleAddInputDebt("mutualFunds")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center">
            {mutualFundInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-24 py-3">
                  <input
                    type="text"
                    name="mf"
                    value={inputValues.mutualFunds}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, mutualFundInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ETF's */}

        <table className="flex flex-col mt-8">
          <thead className="flex">
            <tr>
              <th className="px-32 py-3">ETF's</th>
              <th className="px-20 py-3">Quantity</th>
              <th className="px-20 py-3">Purchase Price</th>
              <th className="px-16 py-3">Market Price</th>
              <th className="px-16 py-3">Market Value</th>
              <th className="px-5 py-3">Gain/Loss</th>
              <th>
                <button
                  onClick={() => handleAddInputDebt("etf")}
                  className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center">
            {etfInputValues.map((inputValues, index) => (
              <tr key={index}>
                <td className="px-24 py-3">
                  <input
                    type="text"
                    name="etf"
                    value={inputValues.etf}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="quantity"
                    value={inputValues.quantity}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="purchasePrice"
                    value={inputValues.purchasePrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketPrice"
                    value={inputValues.marketPrice}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="marketValue"
                    value={inputValues.marketValue}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
                  />
                </td>
                <td className="px-5 py-3">
                  <input
                    type="number"
                    name="gainLoss"
                    value={inputValues.gainLoss}
                    onChange={(e) =>
                      handleInputChangeDebt(e, index, etfInputValues)
                    }
                    className="w-full p-2 rounded-xl text-xl bg-background border border-secondary"
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
