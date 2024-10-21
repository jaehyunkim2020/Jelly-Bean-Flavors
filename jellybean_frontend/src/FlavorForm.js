import React, { useState } from 'react';

const FlavorForm = ({ addFlavor }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    addFlavor({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5>Add a New Flavor</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Flavor Name */}
          <div className="mb-3">
            <label className="form-label">Flavor Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter flavor name"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows="3"
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Add Flavor
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlavorForm;
