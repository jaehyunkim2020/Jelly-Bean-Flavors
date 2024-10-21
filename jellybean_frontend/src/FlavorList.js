import React, { useState } from 'react';
import axios from 'axios';

const FlavorList = ({ flavors, fetchFlavors }) => {
  const [editFlavorId, setEditFlavorId] = useState(null);
  const [editedFlavor, setEditedFlavor] = useState({ name: '', description: '' });

  const startEditing = (flavor) => {
    setEditFlavorId(flavor.id);
    setEditedFlavor({ name: flavor.name, description: flavor.description });
  };

  const cancelEditing = () => {
    setEditFlavorId(null);
    setEditedFlavor({ name: '', description: '' });
  };

  const saveChanges = async (id) => {
    try {
      await axios.put(`/api/flavors/${id}/`, editedFlavor);
      fetchFlavors();
      cancelEditing();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const deleteFlavor = async (id) => {
    try {
      await axios.delete(`/api/flavors/${id}/`);
      fetchFlavors();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div>
      <h2 className='mb-4'>Available Flavors</h2>
      <div className='row'>
        {flavors.map((flavor) => (
          <div key={flavor.id} className='col-md-6 col-lg-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                {editFlavorId === flavor.id ? (
                  <>
                    <input
                      type='text'
                      className='form-control mb-2'
                      value={editedFlavor.name}
                      onChange={(e) => setEditedFlavor({ ...editedFlavor, name: e.target.value })}
                    />
                    <textarea
                      className='form-control mb-2'
                      value={editedFlavor.description}
                      onChange={(e) =>
                        setEditedFlavor({ ...editedFlavor, description: e.target.value })
                      }
                    />
                    <button
                      className='btn btn-primary btn-sm me-2'
                      onClick={() => saveChanges(flavor.id)}
                    >
                      Save
                    </button>
                    <button
                      className='btn btn-secondary btn-sm'
                      onClick={cancelEditing}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <h5 className='card-title'>{flavor.name}</h5>
                    <p className='card-text'>{flavor.description}</p>
                    <div className='d-flex justify-content-end'>
                      <button
                        className='btn btn-secondary btn-sm me-2'
                        onClick={() => startEditing(flavor)}
                      >
                        Edit
                      </button>
                      <button
                        className='btn btn-danger btn-sm'
                        onClick={() => deleteFlavor(flavor.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorList;
