'use client';

import React from 'react';
import { Modal } from './Modal';

interface RemoveDomainModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRemoveDomain: () => void;
  domain: string;
}

export function RemoveDomainModal({
  isOpen,
  onClose,
  onRemoveDomain,
  domain
}: RemoveDomainModalProps): React.ReactElement {
  const handleRemove = (): void => {
    onRemoveDomain();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Remove domain">
      <div>
        <p className="text-gray-600 mb-6">
          Remove {domain} from your whitelisted domains.
        </p>
        
        <div className="mb-6">
          <div className="inline-flex items-center text-gray-500 bg-[#F4F3F3] hover:bg-gray-200 transition-colors px-3 py-1 rounded-full">
            <span>{domain}</span>
            <button 
              className="ml-2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
              aria-label={`Remove ${domain}`}
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="flex w-full gap-2 mt-8">
          <button 
            onClick={onClose}
            className="w-1/2 py-3 text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-100 cursor-pointer transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleRemove}
            className="w-1/2 py-3 bg-black text-white rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
          >
            Remove domain
          </button>
        </div>
      </div>
    </Modal>
  );
} 