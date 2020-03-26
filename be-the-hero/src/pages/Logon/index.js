import React from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import heroesImg from '../../assets/images/heroes.png';
import logo from '../../assets/images/logo.svg';

export default () => {
    return (
       <div className="logon-container">
           <section className="form">
            <img src={logo} alt="logo"/>

            <form>
                <h1>
                    Faça seu logon
                </h1>
                <input type="text" placeholder="Sua Id"/>
                <button className="button" type="submit">Entrar</button>

                <Link to="/register" className="back-link">
                    <FiLogIn size={16} color="E02041" />
                    Não tenho cadastro
                </Link>
            </form>
           </section>
           <img src={heroesImg} alt="heroes"/>
       </div>
    );
}