/**
 * SearchOverlay Component
 * Provides a full-screen search overlay with dynamic filtering across multiple model categories.
 * Implements keyboard, click-outside handling, and responsive result display.
 */

import React, { useState, useEffect, useRef } from "react";
import womenModels from "../assets/women/women.js";
import menModels from "../assets/men/men.js";
import boysModels from "../assets/boys/boys.js";
import girlsModels from '../assets/girls/girls.js'
import kidsModels from '../assets/kids/kids.js'
import babiesModels from '../assets/babies/babies.js'
import { Link } from "react-router-dom";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [searchResults, setSearchResults] = useState([]); // Filtered search results
  const overlayRef = useRef(null); // Ref to detect outside clicks
  const inputRef = useRef(null); // search input ref

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key press to close overlay
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Handle clicks outside the search container
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

   // Filter models by search query across all categories
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const queryLower = query.toLowerCase();
    
    // Search in women models
    const womenResults = womenModels
      .filter(model => model.womenName.toLowerCase().includes(queryLower))
      .map(model => ({
        name: model.womenName,
        picture: model.womenPicture,
        category: "women"
      }));
    
    // Search in men models
    const menResults = menModels
      .filter(model => model.menName.toLowerCase().includes(queryLower))
      .map(model => ({
        name: model.menName,
        picture: model.menPicture,
        category: "men"
      }));
    
    // Search in boys models
    const boysResults = boysModels
      .filter(model => model.boyName.toLowerCase().includes(queryLower))
      .map(model => ({
        name: model.boyName,
        picture: model.boyPicture,
        category: "boys"
      }));

    // Search in girls models
    const girlsResults = girlsModels
    .filter(model => model.girlName.toLowerCase().includes(queryLower))
      .map(model => ({
        name: model.girlName,
        picture: model.girlPicture,
        category: "girls"
      }));

    // Search in kids models 
    const kidsResults = kidsModels
    .filter(model => model.kidName.toLowerCase().includes(queryLower))
    .map(model => ({
       name: model.kidName,
       picture: model.kidPicture,
       category: 'kids'
    }));

    // kids search 
    const babiesResults = babiesModels
    .filter(model => model.babyName.toLowerCase().includes(queryLower))
    .map(model => ({
        name: model.babyName,
        picture: model.babyPicture,
        category: "babies"
    }));
    
    // Combine all results
    const allResults = [...womenResults, ...menResults, ...boysResults, ...babiesResults, ...kidsResults, ...girlsResults];
    setSearchResults(allResults);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950 bg-opacity-80 z-50 flex items-center justify-center p-4">
      {/* Overlay container */}
      <div 
        ref={overlayRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="p-4 border-b">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for models..."
              className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
        
            <button 
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search results container */}
        <div className="overflow-y-auto p-4 flex-1">
          {searchResults.length === 0 && searchQuery.trim() !== "" ? (
            <p className="text-center text-gray-500 py-8">No models found matching "{searchQuery}"</p>
          ) : searchResults.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Type to search for models</p>
          ) : (
            <div>
              <p className="mb-4 text-sm text-gray-500">{searchResults.length} models found</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {searchResults.map((model, index) => (
                  <Link 
                    key={index} 
                    to={`/${model.category}`} 
                    onClick={onClose}
                    className="group"
                  >
                    <div className="bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={model.picture} 
                        alt={model.name} 
                        className="w-full h-40 object-cover transition-all duration-300 group-hover:brightness-90"
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium text-gray-800">{model.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{model.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
