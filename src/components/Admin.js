import React, { Component } from 'react';
import API from '../utilities/api';
import ListingForm from './ListingForm';
import '../styles/admin.scss';

class Admin extends Component {
  state = {
    listings: [],
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

  handleChange = ({ target: { name, value } }) => {
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    console.log('target', name, value);
    const newListing = Object.assign({}, this.state.newListing, { [name]: value });
    this.setState({ newListing });
  }

  handleValueAdd = (name, value) => {
    console.log('vals', name, value);
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
    console.log('vals', name, value);
    const newListing = Object.assign({}, this.state.newListing, { [name]: value });
    this.setState({ newListing });
  }

  handleSubmit = (e) => {
  e.preventDefault();
  const newListing = Object.assign({}, this.state.newListing, { pqe: parseFloat(this.state.newListing.pqe)});

  API
    .post('listings', newListing, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(listing => {
      console.log('Listing added', listing);
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
      this.setState({ newListing });
      this.getListings();
    })
    .catch(err => console.log('error', err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <section className="section">
          <h1 className="title is-2">Admin</h1>
          <ListingForm
            handleChange={this.handleChange}
            handleValueAdd={this.handleValueAdd}
            handleValueSelect={this.handleValueSelect}
            handleSubmit={this.handleSubmit}
            listing={this.state.newListing}
          />
          { this.state.listings.length && this.state.listings.map(job =>
            <div key={job.id}>
              <h1>{job.company}: {job.position}</h1>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Admin;
