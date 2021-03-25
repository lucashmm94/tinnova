import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from '../components/search/Search';
import Header from '../components/header/Header';
import Edit from '../components/edit/Edit';
import Register from '../components/register/Register';

const Routes = () => (
    <BrowserRouter>
       <Header />
        <Switch>
            <Route exact path='/pesquisar' component={Search} />
            <Route exact path='/cadastrar' component={Register} />
            <Route exact path='/editar/:id' component={Edit} />
        </Switch>
    </BrowserRouter>
);

export default Routes;