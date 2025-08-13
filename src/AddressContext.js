import React, { createContext, useState, useEffect } from 'react';

export const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem('addresses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('addresses', JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (address) => {
    setAddresses(prev => [...prev, address]);
  };

  const updateAddress = (index, updatedAddress) => {
    setAddresses(prev => {
      const newAddresses = [...prev];
      newAddresses[index] = updatedAddress;
      return newAddresses;
    });
  };

  const deleteAddress = (index) => {
    setAddresses(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, updateAddress, deleteAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
