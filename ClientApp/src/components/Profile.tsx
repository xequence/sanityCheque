import * as React from 'react';
import { connect } from 'react-redux';

const Profile = () => (
    <div>
        <h1>Profile</h1>
        <p>Welcome Kit!</p>
        <ul>
            <li><a href='/event/index'>Event List</a></li>
            <li><a href='/event/create'>New Event</a></li> 
        </ul> 
    </div>
    
);

export default connect()(Profile);
