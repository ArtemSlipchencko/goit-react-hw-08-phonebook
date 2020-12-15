import React, {Component, lazy, Suspense} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

    render() {

        return (
            <>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route path="/" exact component={lazy(() => import('../../pages/Home'))}/>
                    <Route path="/register" component={lazy(() => import('../../pages/Register'))}/>
                    <Route path="/login" component={lazy(() => import('../../pages/Login'))}/>
                    <Route path="/contacts" component={lazy(() => import('../../pages/Contacts'))}/>
                    <Redirect to="/" />
                </Switch>
            </Suspense>
            </>
        );

    };

};

export default App;