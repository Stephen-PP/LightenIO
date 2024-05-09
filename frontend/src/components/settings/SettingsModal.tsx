import { RiArrowDropDownLine, RiCloseLine } from "@remixicon/react";
import React, { ReactNode, useState } from "react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode | undefined;
  onSave?: () => void;
}

export default function SettingsModal({ isOpen, onClose, children, onSave }: SettingsModalProps) {
    if (!isOpen) return null;

    const [activeTab, setActiveTab] = useState(1);

    const tabOneContent = <BasicSettingsTab />;
    const tabTwoContent = <div>Tab 2 Content</div>;
  
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
    
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 relative min-w-96 w-1/5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Compression Settings</h2>
              <button type="button" onClick={onClose}>
                <RiCloseLine className="text-gray-500 hover:text-gray-800 h-8 w-8" />
              </button>
            </div>
            <div className="mt-6">
              <div className="flex w-full border rounded-lg">
                <button 
                  type="button"
                  className={`w-1/2 py-2.5 text-center border-r border-gray-200 ${activeTab === 1 ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => setActiveTab(1)}
                >
                  Tab 1
                </button>
                <button
                  type="button"
                  className={`w-1/2 py-2.5 text-center ${activeTab === 2 ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => setActiveTab(2)}
                >
                  Tab 2
                </button>
              </div>
            </div>
            <div className="mb-6" style={{"display": activeTab === 1 ? "" : "none"}}>
                {tabOneContent}
            </div>
            <div className="mb-6" style={{"display": activeTab === 2 ? "" : "none"}}>
                {tabTwoContent}
            </div>
            <div className="flex justify-between ">
              <button 
                type="button" 
                className="w-1/4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded" 
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onSave}
                disabled={!onSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      );
  }

  function BasicSettingsTab() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({value: "", text: "Select Option"}); // Track selected option
    const dropdownOptions = [
      { value: "option1", text: "Option 1" },
      { value: "option2", text: "Option 2" },
      { value: "option3", text: "Option 3" },
    ]; // Options with text and value

    return (
        <div className="mb-6">
            <div className="mt-4">
              <label htmlFor="text-input" className="block text-gray-700 text-sm font-bold mb-2">
                Text Input
              </label>
              <input type="text" id="text-input" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mt-4">
              <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold mb-2">
                Dropdown
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 flex justify-between items-center"
                >
                  {selectedOption ? selectedOption.text : "Select Option"}
                  <RiArrowDropDownLine className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                      {dropdownOptions.map((option) => (
                        <button
                          type="button"
                          key={option.value}
                          onClick={() => { setSelectedOption(option); setIsDropdownOpen(false); }}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          role="menuitem"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Checkbox Group</label>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Option 1</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Option 2</span>
                </label>
                {/* ... more checkboxes */}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="slider" className="block text-gray-700 text-sm font-bold mb-2">
                Slider
              </label>
              <input type="range" id="slider" min="0" max="100" className="w-full bg-gray-200 rounded-lg h-2 accent-blue-600" />
            </div>
          </div>
    )
}