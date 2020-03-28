import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.svg';
import api from '../../services/api';

export default () => {
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] =  useState('');
    const [description, setDescription] =  useState('');
    const [value, setValue] =  useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };
        await api.post('incidents', data, {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            alert(response.data.message);
            history.push('/profile');
        }).catch(ex => {
            alert('Erro ao cadastrar incidente, por favor tente novamente mais tarde.');
            console.error('[New incident] - [handleSubmit] - Erro: ', ex);
        });
        
    }

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
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Título" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                
                </form>
           </div>
       </div>
    );
};