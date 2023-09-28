import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
    <div>
        <h1>Hello, welcome to Kit's daily health tracker!</h1>

        <p>The purpose of this is to help our son stop vomiting.
        Kits vomiting started a few months after we left Childrens Hospital in 2019. I decided to build an application after
        our doctor gave us an ultimatium to have our son admitted to the hospital if he doesn't get better.
        <br />This app was built to find answers.
        </p>
        <a href="/events">View Events</a>
    </div>
);

export default connect()(Home);
