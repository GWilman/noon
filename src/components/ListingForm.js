import React from 'react';

const ListingForm = ({ handleChange, handleValueAdd, handleSubmit, listing }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Company</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Company"
              name="company"
              value={listing.company}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Position</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Position"
              name="position"
              value={listing.position}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Industry</label>
          { listing.industry.length > 0 && listing.industry.map((industry, index) =>
            <p key={index}>{industry}</p>
          )}
          <div className="control">
            <div className="select">
              <select name="industry" onChange={handleValueAdd}>
                <option value="Finance">Finance</option>
                <option value="Tech">Tech</option>
                <option value="FinTech">FinTech</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Area</label>
          { listing.area.length > 0 && listing.area.map((area, index) =>
            <p key={index}>{area}</p>
          )}
          <div className="control">
            <div className="select">
              <select name="area" onChange={handleValueAdd}>
                <option value="Corporate">Corporate</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Financial Regulation">Financial Regulation</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Salary Band</label>
          <div className="control">
            <input className="input" type="text" placeholder="Position" required />
          </div>
        </div>
        <div className="field">
          <label className="label">Company Size</label>
          <div className="control">
            <input className="input" type="text" placeholder="Position" required />
          </div>
        </div>
        <div className="field">
          <label className="label">Location</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Location"
              name="location"
              value={listing.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">PQE</label>
          <div className="control">
            <div className="select">
              <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Wildcard</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="wildcard" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="wildcard" />
              No
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link">Add Job</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListingForm;
