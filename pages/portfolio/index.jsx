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
    };

    // Store form data in local storage
    localStorage.setItem("portfolioData", JSON.stringify(formData));

    // Redirect to data.jsx with the same data
    router.push(`/portfolio/data`);
  };

  return (
    <div className="container mx-auto py-10 px-5 lg:px-10">
      <div className="flex flex-col items-center justify-center lg:justify-between">
        <div className="mb-10 lg:mb-0 lg:mr-10 w-full lg:w-1/2">
          <div className="flex flex-col items-center gap-5">
            {/* Search input for Client Name */}
            <select
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="mt-5 p-2 rounded-xl text-xl bg-background border border-secondary w-full"
            >
              <option value="">Select Client Name</option>
              {clients.map((client, index) => (
                <option key={index} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>

            {/* Dropdown for Client Code */}
            <select
              value={clientCode}
              onChange={(e) => setClientCode(e.target.value)}
              className="mt-5 p-2 rounded-xl text-xl bg-background border border-secondary w-full"
            >
              <option value="">Select Client Code</option>
              {clients.map((client, index) => (
                <option key={index} value={client.code}>
                  {client.code}
                </option>
              ))}
            </select>

            {/* Portfolio Date Picker */}
            <label htmlFor="portfolioDate" className="text-xl">
              Portfolio Date:
            </label>
            <input
              type="date"
              id="portfolioDate"
              value={portfolioDate}
              onChange={(e) => setPortfolioDate(e.target.value)}
              className="p-2 rounded-xl text-xl bg-background border border-secondary w-full"
            />
          </div>
        </div>

        {/* STS Table */}
        <div className="table-container mt-5">
          <table className="table-auto" id="sts">
            <thead>
              <tr>
                <th colSpan="7">Short Term Stocks</th>
                <th>
                  <button
                    onClick={() => handleAddInput("sts")}
                    className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                  >
                    +
                  </button>
                </th>
              </tr>
              <tr>
                <th className="px-5 py-5">Short Term Stocks</th>
                <th className="px-5 py-5">Quantity</th>
                <th className="px-5 py-5">Purchase Price</th>
                <th className="px-5 py-5">Market Price</th>
                <th className="px-5 py-5">Market Value</th>
                <th className="px-5 py-5">Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {stsInputValues.map((inputValues, index) => (
                <tr key={index}>
                  <td className="px-8">
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
                  <td>
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
        </div>

        {/* LTS Table */}
        <div className="table-container mt-5">
          <table className="table-auto" id="lts">
            <thead>
              <tr>
                <th colSpan="7">Long Term Stocks</th>
                <th>
                  <button
                    onClick={() => handleAddInput("lts")}
                    className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                  >
                    +
                  </button>
                </th>
              </tr>
              <tr>
                <th className="px-5 py-5">Long Term Stocks</th>
                <th className="px-5 py-5">Quantity</th>
                <th className="px-5 py-5">Purchase Price</th>
                <th className="px-5 py-5">Market Price</th>
                <th className="px-5 py-5">Market Value</th>
                <th className="px-5 py-5">Gain/Loss</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ltsInputValues.map((inputValues, index) => (
                <tr key={index}>
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
        </div>

        {/* EMF Table */}
        <div className="table-container mt-5">
          <table className="table-auto" id="emf">
            <thead>
              <tr>
                <th colSpan="7">Equity Mutual Funds</th>
                <th>
                  <button
                    onClick={() => handleAddInput("emf")}
                    className="px-4 text-xl py-2 rounded-xl bg-secondary text"
                  >
                    +
                  </button>
                </th>
              </tr>
              <tr>
                <th className="px-5 py-5">Equity Mutual Funds</th>
                <th className="px-5 py-5">Quantity</th>
                <th className="px-5 py-5">Purchase Price</th>
                <th className="px-5 py-5">Market Price</th>
                <th className="px-5 py-5">Market Value</th>
                <th className="px-5 py-5">Gain/Loss</th>
              </tr>
            </thead>
            <tbody>
              {emfInputValues.map((inputValues, index) => (
                <tr key={index}>
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
                  <td className="px-8">
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
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-10 p-3 bg-secondary text-white rounded-xl hover:bg-background border-2 border-secondary duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Index;
