import React, { Component } from 'react';
import API from '../utilities/api';
import ListingForm from './ListingForm';
import AdminCard from './AdminCard';
import '../styles/admin.scss';

class Admin extends Component {
  state = {
    listings: [],
    showForm: false,
    newListing: {
      company: '',
      position: '',
      industry: [],
      area: [],
      salary_band: '',
      company_size: '',
      location: '',
      pqe: 0,
      wildcard: false
    }
  };

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    API.get('listings')
      .then(res => {
        console.log(res);
        this.setState({ listings: res.data });
      })
      .catch(err => console.log('error', err));
  }

  showForm = () => {
    this.setState({ showForm: true });
  }

  hideForm = () => {
    this.setState({ showForm: false });
  }

  handleChange = ({ target: { name, value } }) => {
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    const newListing = Object.assign({}, this.state.newListing, { [name]: value });
    this.setState({ newListing });
  }

  handleValueAdd = (name, value) => {
    let array = [];
    if (this.state.newListing[name].indexOf(value) >= 0) {
      array = this.state.newListing[name].filter(val => val !== value);
    } else {
      array = this.state.newListing[name].concat(value);
    }
    const newListing = Object.assign({}, this.state.newListing, { [name]: array });
    this.setState({ newListing });
  }

  handleValueSelect = (name, value) => {
    const newListing = Object.assign({}, this.state.newListing, { [name]: value });
    this.setState({ newListing });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newListing = Object.assign({}, this.state.newListing, { pqe: parseFloat(this.state.newListing.pqe)});

    if (newListing.id) {

      API
        .put(`listings/${newListing.id}`, newListing)
        .then(listing => {
          const newListing = Object.assign({}, {
            company: '',
            position: '',
            industry: [],
            area: [],
            salary_band: '',
            company_size: '',
            location: '',
            pqe: 0,
            wildcard: false
          });
          this.setState({ newListing, showForm: false });
          this.getListings();
        })
        .catch(err => console.log('error', err));

    } else {

      API
        .post('listings', newListing)
        .then(listing => {
          const newListing = Object.assign({}, {
            company: '',
            position: '',
            industry: [],
            area: [],
            salary_band: '',
            company_size: '',
            location: '',
            pqe: 0,
            wildcard: false
          });
          this.setState({ newListing, showForm: false });
          this.getListings();
        })
        .catch(err => console.log('error', err));

    }

  }

  handleEditListing = (id) => {
    const index = this.state.listings.findIndex(listing => listing.id === id);
    const listingToEdit = Object.assign({}, this.state.listings[index]);
    this.setState({ newListing: listingToEdit, showForm: true });
  }

  handleDelete = (id) => {
    API
      .delete(`listings/${id}`)
      .then(listing => {
        this.getListings();
      })
      .catch(err => console.log('error', err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <section className="section">
          <h1 className="title is-2">Rubicon Admin</h1>
          { !this.state.showForm &&
            <div>
              <button className="button is-info is-hidden-mobile margin--bottom" onClick={this.showForm}>Add New Job</button>
              <button className="button is-info is-hidden-tablet is-fullwidth margin--bottom" onClick={this.showForm}>Add New Job</button>
            </div>
          }
          { this.state.showForm &&
            <div>
              <button className="button is-black is-hidden-mobile margin--bottom" onClick={this.hideForm}>Cancel</button>
              <button className="button is-black is-hidden-tablet is-fullwidth margin--bottom" onClick={this.hideForm}>Cancel</button>
              <ListingForm
                handleChange={this.handleChange}
                handleValueAdd={this.handleValueAdd}
                handleValueSelect={this.handleValueSelect}
                handleSubmit={this.handleSubmit}
                listing={this.state.newListing}
              />
            </div>
          }
          { !this.state.showForm &&
            <div>
              { this.state.listings.length && this.state.listings.map(job =>
                <AdminCard
                  key={job.id}
                  listing={job}
                  handleEditListing={this.handleEditListing}
                  handleDelete={this.handleDelete}
                />
              )}
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Admin;
