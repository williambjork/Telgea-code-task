'use client';

import React, { useState } from 'react';

import { WhitelistedDomains } from '@/components/WhitelistedDomains';

export default function CompanyAccount() {
  
  
  // Mock data 
  const companyData = {
    name: 'Signifly',
    website: 'www.signifly.com',
    country: 'Denmark',
    city: 'Copenhagen V',
    street: 'Vesterbrogade 48',
    postal: '1620',
    state: 'Copenhagen',
    verificationStatus: 'submitted',
    domains: [
      'www.telgea.com',
      'www.telgea.com',
      'www.telgea.com',
      'www.telgea.com'
    ]
  };

  const [companyDomains, setCompanyDomains] = useState(companyData.domains);


  const handleAddDomain = (domain: string) => {
    setCompanyDomains(prevDomains => {
      if (prevDomains.includes(domain)) {
        return prevDomains;
      }
      console.log(`Domain added: ${domain}`);
      return [...prevDomains, domain];
    });
  };
  
  const handleRemoveDomain = (index: number) => {
    setCompanyDomains(prevDomains => {
      const updatedDomains = [...prevDomains];
      updatedDomains.splice(index, 1);
      console.log(`Domain removed at index ${index}`);
      return updatedDomains;
    });
  };

  return (
    <div className="min-h-screen bg-[#F2F1ED]">
      <header className="flex items-center p-4 relative mb-6">
        <div className="flex items-center z-10">
          <div className="bg-black w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mr-3">
            <span className="text-white text-xl md:text-3xl font-bold">S</span>
          </div>
          <h1 className="text-lg md:text-xl font-bold">Signifly</h1>
        </div>
        
        <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
          <h2 className="text-lg font-semibold hidden md:block">Company Account</h2>
        </div>
        
        <div className="flex items-center ml-auto z-10">
          <div className="relative mr-4">
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-white text-xs">1</span>
            </div>
          </div>
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#C8FF01] flex items-center justify-center">
            <span className="text-xl md:text-2xl">+</span>
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-64 p-4 lg:p-6 order-1 lg:order-1">
          <div className="lg:sticky lg:top-6">
            <nav className="mb-8">
              <ul className="space-y-4 flex flex-col items-center">
                <li className="text-gray-700 cursor-pointer hover:text-black mb-12">Overview</li>
                <li className="text-gray-700 cursor-pointer hover:text-black">Analytics</li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 order-3 lg:order-2 min-w-0">
          <div className="bg-white rounded-2xl p-4 md:p-6  md:mb-6 relative ">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h2 className="text-md font-medium mb-2 sm:mb-0">Company Details</h2>
              <button
                className="bg-black hover:bg-gray-800 rounded-lg px-6 py-1 text-white"
              >
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-black w-12 h-12 md:w-16 md:h-16 rounded-[21px] flex items-center justify-center mr-4">
                    <span className="text-white text-3xl md:text-5xl font-bold">S</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Company Name</p>
                    <p className="text-xl text-black font-medium">{companyData.name}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-500">Country</p>
                  <p className="text-xl text-black font-medium">{companyData.country}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-500">Street</p>
                  <p className="text-xl text-black font-medium">{companyData.street}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-500">State</p>
                  <p className="text-xl text-black font-medium">{companyData.state}</p>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-xs text-gray-500">Website</p>
                  <p className="text-lg text-black font-medium">{companyData.website}</p>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-gray-500">City</p>
                  <p className="text-lg text-black font-medium">{companyData.city}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500">Postal</p>
                  <p className="text-lg text-black font-medium">{companyData.postal}</p>
                </div>
              </div>
            </div>
          </div>

      
          <div className="bg-white rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg text-black font-medium">Company verification submitted</h2>
              <span className="bg-[#F1FBD0] px-5 py-1 rounded-full text-sm">Submitted</span>
            </div>
            <p className="text-gray-500 text-sm">
              Your company verification has been successfully submitted! We&apos;ll notify you as soon as 
              it&apos;s approved, so you can begin creating mobile plans right away.
            </p>
          </div>

          <WhitelistedDomains 
            domains={companyDomains}
            onAddDomain={handleAddDomain}
            onRemoveDomain={handleRemoveDomain}
            domainCount={companyDomains.length}
          />

        </main>

        {/* Spacer */}
        <aside className="w-full lg:w-64 lg:p-6 order-2 lg:order-3">
        </aside>
      </div>
    </div>
  );
} 