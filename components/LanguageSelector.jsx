import React, { useState, useRef, useEffect } from "react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    code: "en",
  });

  const languages = [
    { name: "English", code: "en" },
    { name: "Deutsch", code: "de" },
    { name: "Français", code: "fr" },
    { name: "Español", code: "es" },
    { name: "Italiano", code: "it" },
    { name: "Português", code: "pt" },
    { name: "日本語", code: "ja" },
    { name: "한국어", code: "ko" },
    { name: "中文", code: "zh" },
    { name: "Русский", code: "ru" },
    { name: "Nederlands", code: "nl" },
    { name: "Svenska", code: "sv" },
    { name: "Norsk", code: "no" },
    { name: "Dansk", code: "da" },
    { name: "Suomi", code: "fi" },
    { name: "Polski", code: "pl" },
    { name: "Türkçe", code: "tr" },
    { name: "العربية", code: "ar" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".language-selector")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block ml-2 language-selector">
      <div>
        <button
          onClick={toggleDropdown}
          aria-controls="popover-languages"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className="flex items-center space-x-1.5 px-3 py-2 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          <span className="inline-block">
            <span data-flagshdt="" data-current="" className="inline-block">
              {selectedLanguage.name}
            </span>
          </span>
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
            id="popover-languages"
            className="fixed bottom-0 left-0 right-0 md:absolute md:bottom-auto md:top-0 md:left-auto md:right-0 md:transform md:-translate-y-full w-full md:w-48 bg-white border border-gray-200 rounded-t-lg md:rounded-lg shadow-lg z-50 max-h-[70vh] md:max-h-[280px] overflow-hidden"
          >
            <ul className="max-h-[60vh] md:max-h-[220px] overflow-y-auto">
              {languages.map((language) => (
                <li key={language.code}>
                  <button
                    onClick={() => selectLanguage(language)}
                    className={`flex items-center w-full px-4 py-3 text-left text-xs hover:bg-gray-50 ${
                      selectedLanguage.code === language.code
                        ? "bg-gray-50 font-medium"
                        : ""
                    }`}
                  >
                    <span>{language.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
