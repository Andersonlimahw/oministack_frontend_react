import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.svg';
import api from '../../services/api';

export default () => {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

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

    const handleDeleteIncident = async (id) => {
         try {
            await api.delete(`incidents/${id}`,  {
                headers: {
                    Authorization: ongId
                }
            }).then(() => {
                setIncidents(incidents.filter(incident => incident.id !== id));
                alert('Incidente removido com sucesso!');
            });
         } catch(ex) {
            console.error('[Profile] - [handleDeleteIncident] - Erro:', ex);
            // TODO criar component pra subistuir alerts
            alert('Erro ao deletar incidente, por favor tente novamente mais tarde.');
         }
    }
    const handleLogout = async () => {
       await localStorage.clear();
       history.push('/');
    }

    const renderIncidentes = () => {
        if (incidents && incidents.length !== 0) {
            return (
                <ul>
                    {incidents.map((incident) => {
                        return (
                            <li key={incident.id}>
                                <strong>Caso:</strong>
                                <p>{incident.title}</p>

                                <strong>Descrição:</strong>
                                <p>{incident.description}</p>

                                <strong>Value:</strong>
                                <p>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency', 
                                    currency: 'BRL', 
                                }).format(incident.value)}</p>

                                <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
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
                <button className="button" onClick={()=> handleLogout()}>
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