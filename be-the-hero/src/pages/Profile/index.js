import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.svg';

export default () => {
    return (
       <div className="profile-container">
            <header>
                <img src={logo} alt="Be the hero"/>
                <span>Bem vinda, APAD</span>
                <Link to="/incidents/new" className="button">
                    cadastrar novo
                </Link>
                <button className="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>
            <h1>
                Casos cadastrados
            </h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição:</strong>
                    <p>R$ 120,00</p>
                    <button type="button">
                        <FiTrash2 size={18} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
       </div>
    );
};