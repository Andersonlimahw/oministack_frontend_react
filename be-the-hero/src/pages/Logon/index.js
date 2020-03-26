import React from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';

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

                <a href="/register">
                    <FiLogIn size={16} color="E02041" />
                    Não tenho cadastro
                </a>
            </form>
           </section>
           <img src={heroesImg} alt="heroes"/>
       </div>
    );
}