'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';

interface AddDomainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDomain: (domain: string) => void;
  existingDomains?: string[];
}

export function AddDomainModal({ 
  isOpen, 
  onClose, 
  onAddDomain,
  existingDomains = []
}: AddDomainModalProps) {
  const [domain, setDomain] = useState('');
  const [addedDomains, setAddedDomains] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
    setError(null);
  };
  
  const validateDomain = (domain: string): boolean => {
    const domainRegex = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  };
  
  const handleAddDomain = () => {
    if (!domain) {
      setError("Please enter a domain");
      return;
    }
    
    if (!validateDomain(domain)) {
      setError("Please enter a valid domain (e.g., example.com)");
      return;
    }
    
    if (addedDomains.includes(domain)) {
      setError("This domain has already been added");
      return;
    }
    
    if (existingDomains.includes(domain)) {
      setError("This domain already exists in your account");
      return;
    }
    
    setAddedDomains([...addedDomains, domain]);
    setDomain('');
    setError(null);
  };
  
  const handleRemoveDomain = (domainToRemove: string) => {
    setAddedDomains(addedDomains.filter(d => d !== domainToRemove));
  };
  
  const handleSubmit = () => {
    addedDomains.forEach(d => {
      onAddDomain(d);
    });
    
    setAddedDomains([]);
    setDomain('');
    setError(null);
    onClose();
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && domain) {
      e.preventDefault();
      handleAddDomain();
    }
  };

  React.useEffect(() => {
    if (!isOpen) {
      setAddedDomains([]);
      setDomain('');
      setError(null);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add domain">
      <div>
        <p className="text-gray-600 mb-6">
          Specify trusted domains to validate employee requests. 
          For example, requests made when employees transfer 
          numbers to Telgea will be automatically associated with 
          your account.
        </p>
        
        <div className="mb-6">
          <h3 className="block text-sm text-gray-500">Domain</h3>
          <div className="flex">
            <div className="flex-grow">
              <input
                id="domain"
                type="text"
                value={domain}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="example.com"
                className={`w-full border-b ${error ? 'border-red-500' : 'border-gray-300'} focus:border-black outline-none py-2 text-lg`}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>
            <button 
              onClick={handleAddDomain}
              disabled={!domain}
              className={`ml-2 w-16 h-16 rounded-full bg-black flex items-center justify-center ${!domain ? 'disabled:bg-gray-300' : 'hover:bg-gray-800 cursor-pointer transition-colors'}`}
              aria-label="Add domain"
            >
              <span className="text-white font-thin text-4xl">+</span>
            </button>
          </div>
        </div>
        
        {addedDomains.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {addedDomains.map((d, index) => (
              <div 
                key={index} 
                className="flex items-center bg-[#F4F3F3] px-3 py-1 rounded-full"
              >
                <span className="mr-2">{d}</span>
                <button 
                  onClick={() => handleRemoveDomain(d)}
                  className="text-gray-500"
                  aria-label={`Remove ${d}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex w-full gap-2 mt-8">
          <button 
            onClick={onClose}
            className="w-1/2 py-3 text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-100"
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            disabled={addedDomains.length === 0}
            className={`w-1/2 py-3 bg-black text-white rounded-lg ${addedDomains.length === 0 ? 'disabled:bg-gray-300 disabled:cursor-not-allowed' : 'hover:bg-gray-800 cursor-pointer transition-colors'}`}
          >
            Add domain
          </button>
        </div>
      </div>
    </Modal>
  );
} 