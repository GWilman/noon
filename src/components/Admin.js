import React, { Component } from 'react';
import API from '../utilities/api';

class Admin extends Component {
  state = {
    listings: []
  };

  componentDidMount() {
    API.get('listings')
      .then(res => {
        console.log(res);
        this.setState({ listings: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <h2>Admin</h2>
        { this.state.listings.length && this.state.listings.map(job =>
          <div key={job.id}>
            <h1>{job.company}: {job.position}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Admin;
