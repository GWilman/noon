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
    API.get('listings')
      .then(res => {
        console.log(res);
        this.setState({ listings: res.data });
      })
      .catch(err => console.log('error', err));
  }

  handleChange = ({ target: { name, value } }) => {
    console.log('target', name, value);
    const newListing = Object.assign({}, this.state.newListing, { [name]: value });
    this.setState({ newListing });
  }

  handleValueAdd = ({ target: { name, value } }) => {
    console.log('target', name, value);
    const array = this.state.newListing[name].concat(value);
    const newListing = Object.assign({}, this.state.newListing, { [name]: array });
    this.setState({ newListing });
  }

  handleSubmit = (e) => {
  e.preventDefault();
  const newListing = Object.assign({}, this.state.newListing);

  API
    .post('/listing', newListing)
    .then(listing => {
      console.log('Listing added', listing);
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
