import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return <div> <h4>Hello {user.name}</h4>
    <h5>Email: {user.email}</h5>
    
    {console.log(user)} 
    
    
    </div>;
    
  }
}

export default withAuth0(Profile);