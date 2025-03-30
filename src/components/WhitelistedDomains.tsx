'use client';

import React, { useState } from 'react';
import { AddDomainModal } from './AddDomainModal';
import { RemoveDomainModal } from './RemoveDomainModal';

interface Domain {
  name: string;
}

interface WhitelistedDomainsProps {
  domains: Domain[] | string[];
  onAddDomain?: (domain: string) => void;
  onRemoveDomain?: (index: number) => void;
  domainCount?: number;
}

export function WhitelistedDomains({
  domains,
  onAddDomain = () => console.log('Add domain clicked'),
  onRemoveDomain = (index) => console.log(`Remove domain at index ${index}`),
  domainCount = domains.length
}: WhitelistedDomainsProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState<boolean>(false);
  const [selectedDomainIndex, setSelectedDomainIndex] = useState<number>(-1);
  
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };
  
  const handleOpenRemoveModal = (index: number) => {
    setSelectedDomainIndex(index);
    setIsRemoveModalOpen(true);
  };
  
  const handleCloseRemoveModal = () => {
    setIsRemoveModalOpen(false);
    setSelectedDomainIndex(-1);
  };
  
  const handleAddDomain = (domain: string) => {
    onAddDomain(domain);
  };

  const handleRemoveDomain = () => {
    if (selectedDomainIndex !== -1) {
      onRemoveDomain(selectedDomainIndex);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/4 md:pr-6">
            <h2 className="text-lg font-medium mb-2">Whitelisted Domains</h2>
            <p className="text-gray-500 mb-4 md:mb-0 text-sm">
              Specify trusted domains to validate employee requests. Requests from these domains will be automatically linked to your account
            </p>
          </div>
          
          <div className="md:w-2/4">
            <div className="flex justify-start items-center mb-4">
              <button 
                onClick={handleOpenAddModal}
                className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center mr-2 cursor-pointer"
              >
                <span className="text-white text-3xl">+</span>
              </button>
              <p>Domains
                <span className="text-gray-500 ml-1">{domainCount}</span> 
              </p>
            </div>
            
            <div className="flex flex-row">
              {domains.length > 0 ? (
                <>
                  <div className="w-1/2 pr-2">
                    {domains.map((domain, index) => 
                      index % 2 === 0 && (
                        <DomainItem 
                          key={index}
                          domain={domain}
                          index={index}
                          onRemove={handleOpenRemoveModal}
                        />
                      )
                    )}
                  </div>
                  
                  <div className="w-1/2 pl-2">
                    {domains.map((domain, index) => 
                      index % 2 === 1 && (
                        <DomainItem 
                          key={index}
                          domain={domain}
                          index={index}
                          onRemove={handleOpenRemoveModal}
                        />
                      )
                    )}
                  </div>
                </>
              ) : (
                <div className="w-full text-center text-gray-500 text-sm py-2">
                  No domains added yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <AddDomainModal 
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAddDomain={handleAddDomain}
        existingDomains={domains.map(d => typeof d === 'string' ? d : d.name)}
      />

      {isRemoveModalOpen && selectedDomainIndex !== -1 && (
        <RemoveDomainModal
          isOpen={isRemoveModalOpen}
          onClose={handleCloseRemoveModal}
          onRemoveDomain={handleRemoveDomain}
          domain={typeof domains[selectedDomainIndex] === 'string' ? domains[selectedDomainIndex] : (domains[selectedDomainIndex] as Domain).name}
        />
      )}
    </>
  );
}

function DomainItem({ domain, index, onRemove }: { 
  domain: string | { name: string }; 
  index: number;
  onRemove: (index: number) => void;
}) {
  const domainName = typeof domain === 'string' ? domain : domain.name;
  
  return (
    <div 
      className="flex items-center justify-between bg-[#F4F3F3] hover:bg-gray-200 transition-colors px-3 py-1 rounded-full mb-2 w-full"
    >
      <span className="text-sm text-gray-500 truncate mr-2">
        {domainName}
      </span>
      <button 
        onClick={() => onRemove(index)} 
        className="text-gray-500 hover:text-gray-700 flex-shrink-0 cursor-pointer"
        aria-label={`Remove ${domainName}`}
      >
        ×
      </button>
    </div>
  );
} 