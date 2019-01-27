import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

const AdminCard = ({ listing, handleEditListing, handleDelete }) => {
  return (
    <div className="card has-rounded-corners margin--bottom">
      <header className="card-header">
        <p className="card-header-title">
          {listing.company} - {listing.position}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="has-text-centered has-text-grey-light margin--bottom">
            <FontAwesomeIcon icon="map-marker" size="sm" className="margin-half--right" />
            <small>{listing.location}</small>
          </div>
          <p>
            Industry: {listing.industry.map((industry, index) => industry + `${index === listing.industry.length - 1 ? '' : ' / '}`)}
            <br />
            Area: {listing.area.map((area, index) => area + `${index === listing.area.length - 1 ? '' : ' / '}`)}
            <br />
            Company Size: {listing.company_size}
            <br />
            Experience Level: {listing.pqe} years PQE
            <br />
            Salary Estimate: {listing.salary_band}
            <br />
            <small>Added on {moment(listing.createdAt).format('DD/MM/YYYY - HH:mm')}</small>
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <a className="card-footer-item" onClick={() => handleEditListing(listing.id)}>Edit</a>
        <a className="card-footer-item is-danger" onClick={() => handleDelete(listing.id)}>Delete</a>
      </footer>
    </div>
  );
};

export default AdminCard;
