import React, { useState, useRef, useEffect } from "react";

const CurrencySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState({
    country: "Australia",
    code: "AUD",
    symbol: "$",
  });

  const currencies = [
    { country: "Australia", code: "AUD", symbol: "$" },
    { country: "Austria", code: "EUR", symbol: "€" },
    { country: "Belgium", code: "EUR", symbol: "€" },
    { country: "Canada", code: "CAD", symbol: "$" },
    { country: "Czechia", code: "CZK", symbol: "Kč" },
    { country: "Denmark", code: "DKK", symbol: "kr." },
    { country: "Finland", code: "EUR", symbol: "€" },
    { country: "France", code: "EUR", symbol: "€" },
    { country: "Germany", code: "EUR", symbol: "€" },
    { country: "Hong Kong SAR", code: "HKD", symbol: "$" },
    { country: "Ireland", code: "EUR", symbol: "€" },
    { country: "Israel", code: "ILS", symbol: "₪" },
    { country: "Italy", code: "EUR", symbol: "€" },
    { country: "Japan", code: "JPY", symbol: "¥" },
    { country: "Malaysia", code: "MYR", symbol: "RM" },
    { country: "Mexico", code: "MXN", symbol: "$" },
    { country: "Netherlands", code: "EUR", symbol: "€" },
    { country: "New Zealand", code: "NZD", symbol: "$" },
    { country: "Norway", code: "USD", symbol: "$" },
    { country: "Poland", code: "PLN", symbol: "zł" },
    { country: "Portugal", code: "EUR", symbol: "€" },
    { country: "Singapore", code: "SGD", symbol: "$" },
    { country: "South Korea", code: "KRW", symbol: "₩" },
    { country: "Spain", code: "EUR", symbol: "€" },
    { country: "Sweden", code: "SEK", symbol: "kr" },
    { country: "Switzerland", code: "CHF", symbol: "CHF" },
    { country: "United Arab Emirates", code: "AED", symbol: "د.إ" },
    { country: "United Kingdom", code: "GBP", symbol: "£" },
    { country: "United States", code: "USD", symbol: "$" },
    { country: "Vietnam", code: "VND", symbol: "₫" },
  ];

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".currency-selector")) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block currency-selector">
      <button
        onClick={toggleDropdown}
        aria-controls="popover-currencies"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="flex items-center space-x-1.5 px-3 py-2 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors"
      >
        <span>{selectedCurrency.code}</span>
        <svg
          className={`inline-block w-2.5 h-2.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          role="presentation"
          viewBox="0 0 19 12"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            points="17 2 9.5 10 2 2"
            fillRule="evenodd"
            strokeWidth="2"
            strokeLinecap="square"
          ></polyline>
        </svg>
      </button>

      {isOpen && (
        <div
          id="popover-currencies"
          className="fixed bottom-0 left-0 right-0 md:absolute md:bottom-auto md:top-0 md:left-auto md:right-0 md:transform md:-translate-y-full w-full md:w-64 bg-white border border-gray-200 rounded-t-lg md:rounded-lg shadow-lg z-50 max-h-[70vh] md:max-h-[280px] overflow-hidden"
        >
          <div className="sticky top-0 bg-white p-2 border-b z-10">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              autoFocus
            />
          </div>

          <div className="overflow-y-auto max-h-[60vh] md:max-h-[220px]">
            <ul>
              {filteredCurrencies.map((currency) => (
                <li key={currency.country}>
                  <button
                    onClick={() => selectCurrency(currency)}
                    className="flex items-center w-full px-4 py-3 text-left text-xs hover:bg-gray-50"
                  >
                    <div className="flex flex-col w-full">
                      <div className="font-medium">{currency.country}</div>
                      <div className="text-gray-500 mt-0.5">
                        {currency.code} {currency.symbol} | {currency.country}
                      </div>
                    </div>
                  </button>
                </li>
              ))}

              {filteredCurrencies.length === 0 && (
                <li className="px-4 py-3 text-xs text-gray-500 text-center">
                  No currencies found
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
