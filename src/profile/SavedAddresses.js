import React, { useContext, useState } from 'react';
import { AddressContext } from '../AddressContext';
import './SavedAddresses.css';

const SavedAddresses = () => {
  const { addresses, addAddress, updateAddress, deleteAddress } = useContext(AddressContext);
  const [newAddress, setNewAddress] = useState({ name: '', address: '', city: '', state: '', zipCode: '', phoneNumber: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddOrUpdateAddress = () => {
    if (editingIndex >= 0) {
      updateAddress(editingIndex, newAddress);
      setEditingIndex(-1);
    } else {
      addAddress(newAddress);
    }
    setNewAddress({ name: '', address: '', city: '', state: '', zipCode: '', phoneNumber: '' });
  };

  const handleEditAddress = (index) => {
    setNewAddress(addresses[index]);
    setEditingIndex(index);
  };

  const handleDeleteAddress = (index) => {
    deleteAddress(index);
  };

  return (
    <div className="saved-addresses-container">
      <h2>Saved Addresses</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAddOrUpdateAddress(); }}>
        <input type="text" placeholder="Name" value={newAddress.name} onChange={e => setNewAddress({ ...newAddress, name: e.target.value })} required />
        <input type="text" placeholder="Address" value={newAddress.address} onChange={e => setNewAddress({ ...newAddress, address: e.target.value })} required />
        <input type="text" placeholder="City" value={newAddress.city} onChange={e => setNewAddress({ ...newAddress, city: e.target.value })} required />
        <input type="text" placeholder="State" value={newAddress.state} onChange={e => setNewAddress({ ...newAddress, state: e.target.value })} required />
        <input type="text" placeholder="Zip Code" value={newAddress.zipCode} onChange={e => setNewAddress({ ...newAddress, zipCode: e.target.value })} required />
        <input type="text" placeholder="Phone Number" value={newAddress.phoneNumber} onChange={e => setNewAddress({ ...newAddress, phoneNumber: e.target.value })} required />
        <button type="submit">{editingIndex >= 0 ? 'Update Address' : 'Add Address'}</button>
      </form>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            <p>{`${address.name}, ${address.address}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.phoneNumber}`}</p>
            <button onClick={() => handleEditAddress(index)}>Edit</button>
            <button onClick={() => handleDeleteAddress(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedAddresses;
