import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";

import Search from '../components/search/Search'
import Register from '../components/register/Register'
import Edit from '../components/Edit/Edit'

export default function Routes () {
    return(
        <Router>
            <Route exact path='/'  component={Search} />
            <Route exact path='/pesquisar' component={Search} />
            <Route exact path='/cadastrar'  component={Register} />
            <Route exact path='/editar/:id'  component={Edit} />
        </Router>
    )
    
}