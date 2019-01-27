import React from 'react';

const ListingForm = ({ handleChange, handleValueAdd, handleValueSelect, handleWildcardToggle, handleSubmit, listing }) => {
  console.log('listing', listing);
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
          <div className="control">
            <div className="flex tags are-medium">
              <span className={`tag is-light ${(listing.industry.indexOf('Finance') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('industry', 'Finance')}>Finance</span>
              <span className={`tag is-light ${(listing.industry.indexOf('Tech') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('industry', 'Tech')}>Tech</span>
              <span className={`tag is-light ${(listing.industry.indexOf('FinTech') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('industry', 'FinTech')}>FinTech</span>
              <span className={`tag is-light ${(listing.industry.indexOf('Other') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('industry', 'Other')}>Other</span>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Area</label>
          <div className="control">
            <div className="flex tags are-medium">
              <span className={`tag is-light ${(listing.area.indexOf('Financial Regulation') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('area', 'Financial Regulation')}>Financial Regulation</span>
              <span className={`tag is-light ${(listing.area.indexOf('Corporate') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('area', 'Corporate')}>Corporate</span>
              <span className={`tag is-light ${(listing.area.indexOf('Real Estate') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('area', 'Real Estate')}>Real Estate</span>
              <span className={`tag is-light ${(listing.area.indexOf('Other') >= 0 ? 'is-success' : '')}`} onClick={() => handleValueAdd('area', 'Other')}>Other</span>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Salary Band</label>
          <div className="control">
            <div className="flex tags are-medium">
              <span className={`tag is-light ${(listing.salary_band === 'less than 50k' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('salary_band', 'less than 50k')}>less than 50k</span>
              <span className={`tag is-light ${(listing.salary_band === '50k - 75k' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('salary_band', '50k - 75k')}>50k - 75k</span>
              <span className={`tag is-light ${(listing.salary_band === '75k - 100k' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('salary_band', '75k - 100k')}>75k - 100k</span>
              <span className={`tag is-light ${(listing.salary_band === '100k - 150k' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('salary_band', '100k - 150k')}>100k - 150k</span>
              <span className={`tag is-light ${(listing.salary_band === 'more than 150k' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('salary_band', 'more than 150k')}>more than 150k</span>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Company Size</label>
          <div className="control">
            <div className="flex tags are-medium">
              <span className={`tag is-light ${(listing.company_size === '1 - 10' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('company_size', '1 - 10')}>1 - 10</span>
              <span className={`tag is-light ${(listing.company_size === '10 - 25' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('company_size', '10 - 25')}>10 - 25</span>
              <span className={`tag is-light ${(listing.company_size === '25 - 50' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('company_size', '25 - 50')}>25 - 50</span>
              <span className={`tag is-light ${(listing.company_size === '50 - 100' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('company_size', '50 - 100')}>50 - 100</span>
              <span className={`tag is-light ${(listing.company_size === '100 - 500' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('company_size', '100 - 500')}>100 - 500</span>
              <span className={`tag is-light ${(listing.company_size === '500+' ? 'is-primary' : '')}`} onClick={() => handleValueSelect('company_size', '500+')}>500+</span>
            </div>
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
              <select
                name="pqe"
                value={listing.pqe}
                onChange={handleChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Wildcard</label>
          <div className="control">
            <label className="radio">
              <input type="radio" name="wildcard" value="true" checked={listing.wildcard} onChange={handleChange} />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="wildcard" value="false" checked={!listing.wildcard} onChange={handleChange} />
              No
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control">
            { listing.id ?
              <button className="button is-info is-fullwidth">Edit Job</button>
            :
              <button className="button is-info is-fullwidth">Add Job</button>
            }
          </div>
        </div>
      </form>
    </div>
  )
};

export default ListingForm;
