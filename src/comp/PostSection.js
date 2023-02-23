import React, { useState } from 'react';
 import './PostSection.css';

const NewPost = () => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [picturePreview, setPicturePreview] = useState(null);
  const [options, setOptions] = useState('');
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState('');
  const [bankDetails, setBankDetails] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      options,
      caption,
      location,
      amount,
      bankDetails,
    });
  };

  function handlePictureChange(event) {
    const selected = event.target.files[0];
    setSelectedPicture(selected);
    if (selected) {
      const reader = new FileReader();
      reader.onload = () => {
        setPicturePreview(reader.result);
      };
      reader.readAsDataURL(selected);
    }
  }

  return (
    <div className="new-post">
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="picture">Picture</label>
          <input type="file" id="picture" onChange={handlePictureChange} />
          {picturePreview && (
            <img src={picturePreview} alt="Selected Picture Preview" />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="options">Options</label>
          <select id="options" onChange={(event) => setOptions(event.target.value)}>
            <option value="">Choose Tags</option>
            <option value="option1">Animal help</option>
            <option value="option2">Human Medical Help</option>
            <option value="option3">Education</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <textarea
            id="caption"
            onChange={(event) => setCaption(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bank-details">Bank Details</label>
          <textarea
            id="bank-details"
            onChange={(event) => setBankDetails(event.target.value)}
          ></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPost;