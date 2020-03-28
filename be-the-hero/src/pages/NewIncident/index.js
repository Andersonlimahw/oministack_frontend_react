import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.svg';

export default () => {
    return (
       <div className="new-incident-container">
           <div className="content">
                <section>
                <img src={logo} alt="logo"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="E02041" />
                    Voltar
                </Link>
                </section>
                <form>
                    <input placeholder="Título" />
                    <textarea placeholder="Descrição" />
                    <input type="number" placeholder="Valor em reais" />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                
                </form>
           </div>
       </div>
    );
};