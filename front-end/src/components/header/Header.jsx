import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <Router>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <Link to='/pesquisar' className="brand-logo center">CRUD Veículos</Link>
                        <ul id="nav-mobile" className="left">
                           <li> <Link to="/pesquisar">Pesquisar</Link></li> 
                           <li><Link to="/cadastrar">Cadastrar</Link></li> 
                            
                        </ul>
                    </div>
                </nav>
            </Router>
        </>
    )
}