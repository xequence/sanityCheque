import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Profile from './components/Profile';
import Events from './components/EventData';
import Form from './components/EventForm';
import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/events' component={Events} />
        <Route path='/createevent' component={Form}/>
    </Layout>
);
