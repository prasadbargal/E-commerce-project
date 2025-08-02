import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const initialFormState = {
  id: null,
  title: '',
  description: '',
  image: '',
  tag: '',
  price: '',
  link: '',
  visible: true,
};

const AdminDashboard = () => {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [previewCard, setPreviewCard] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('adminCards')) || [];
    setCards(storedCards);
  }, []);

  useEffect(() => {
    localStorage.setItem('adminCards', JSON.stringify(cards));
  }, [cards]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Save local path as relative path to /src/images
      const imagePath = `/src/images/${file.name}`;
      setForm({ ...form, image: imagePath });
      // Note: Actual file saving to /src/images requires backend or build step, here we simulate path only
    }
  };

  const validateForm = () => {
    if (!form.title.trim()) {
      showToast('Title is required', 'error');
      return false;
    }
    if (!form.description.trim()) {
      showToast('Description is required', 'error');
      return false;
    }
    if (!form.image.trim()) {
      showToast('Image is required', 'error');
      return false;
    }
    if (!form.tag.trim()) {
      showToast('Tag is required', 'error');
      return false;
    }
    return true;
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddOrUpdate = () => {
    if (!validateForm()) return;

    if (isEditing) {
      setCards(cards.map(card => (card.id === form.id ? form : card)));
      showToast('Card updated successfully', 'success');
    } else {
      setCards([...cards, { ...form, id: Date.now() }]);
      showToast('Card added successfully', 'success');
    }
    setForm(initialFormState);
    setIsEditing(false);
  };

  const handleEdit = (card) => {
    setForm(card);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      setCards(cards.filter(card => card.id !== id));
      showToast('Card deleted', 'success');
    }
  };

  const toggleVisibility = (id) => {
    setCards(cards.map(card => card.id === id ? { ...card, visible: !card.visible } : card));
  };

  const handlePreview = (card) => {
    setPreviewCard(card);
  };

  const closePreview = () => {
    setPreviewCard(null);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="form-section">
        <h2>{isEditing ? 'Edit Card' : 'Add New Card'}</h2>
        <div className="form-group">
          <label>Title *</label>
          <input name="title" value={form.title} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Description *</label>
          <textarea name="description" value={form.description} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Image Upload *</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {form.image && <div className="image-path">Image Path: {form.image}</div>}
        </div>
        <div className="form-group">
          <label>Tag *</label>
          <input name="tag" value={form.tag} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Price (optional)</label>
          <input name="price" type="number" value={form.price} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Button Link/Route (optional)</label>
          <input name="link" value={form.link} onChange={handleInputChange} />
        </div>
        <button className="submit-btn" onClick={handleAddOrUpdate}>
          {isEditing ? 'Update Card' : 'Add Card'}
        </button>
      </div>

      <div className="cards-section">
        <h2>Added Cards</h2>
        {cards.length === 0 && <p>No cards added yet.</p>}
        <div className="cards-grid">
          {cards.map(card => (
            <div key={card.id} className={`card ${card.visible ? '' : 'hidden'}`}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.price && <p className="price">Price: ₹{card.price}</p>}
              <p className="tag">Tag: {card.tag}</p>
              {card.link && <p className="link">Link: {card.link}</p>}
              <div className="card-actions">
                <button onClick={() => handleEdit(card)}>Edit</button>
                <button onClick={() => handleDelete(card.id)}>Delete</button>
                <button onClick={() => toggleVisibility(card.id)}>
                  {card.visible ? 'Hide' : 'Show'}
                </button>
                <button onClick={() => handlePreview(card)}>Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewCard && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="preview-content" onClick={e => e.stopPropagation()}>
            <h3>Preview: {previewCard.title}</h3>
            <img src={previewCard.image} alt={previewCard.title} />
            <p>{previewCard.description}</p>
            {previewCard.price && <p className="price">Price: ₹{previewCard.price}</p>}
            <p className="tag">Tag: {previewCard.tag}</p>
            {previewCard.link && <p className="link">Link: {previewCard.link}</p>}
            <button onClick={closePreview}>Close Preview</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
