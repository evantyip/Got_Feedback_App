import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import history from '../history';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <div className="container">
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/surveys" exact component={Dashboard} />
                        <Route
                            path="/surveys/new"
                            exact
                            component={SurveyNew}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(App);
