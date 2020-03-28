import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.svg';
import api from '../../services/api';

export default () => {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        }).catch(ex => {
            console.error('Erro ao carregar profile => ', ex);
            setIncidents([]);
        });
    }, [ongId]);

    const renderIncidentes = () => {
        if (incidents && incidents.length !== 0) {
            return (
                <ul>
                    {incidents.map((incident) => {
                        return (
                            <li>
                                <strong>Caso:</strong>
                                <p>{incident.title}</p>

                                <strong>Descrição:</strong>
                                <p>{incident.description}</p>

                                <strong>Value:</strong>
                                <p>R$ {incident.value}</p>

                                <button type="button">
                                    <FiTrash2 size={18} color="#a8a8b3" />
                                </button>
                            </li>
                        );
                    })
                    }
                </ul>);
        }
        return (
            <h1>
                Nenhum incidente cadastrado. Use o botão cadastrar novo, para cadastrar novos incidentes.
            </h1>
        );
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be the hero" />
                <span>Bem vinda, {ongName}</span>
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
            <div>
                {
                    renderIncidentes()
                }
            </div>

        </div>
    );
};