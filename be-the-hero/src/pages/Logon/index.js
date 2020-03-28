import React, { useState } from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import heroesImg from '../../assets/images/heroes.png';
import logo from '../../assets/images/logo.svg';

import api from '../../services/api';

export default () => {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        const data = {
            id
        };
        console.log(data);
        try {
            const response = await api.post('sessions', data);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
            //alert(`Bem vindo: ${response.data.name}`);
        } catch(ex){
            alert('Erro ao efeturar login.');
            console.error('Error: ', ex);
        }
      
    }
    return (
       <div className="logon-container">
           <section className="form">
            <img src={logo} alt="logo"/>

            <form onSubmit={handleLogin}>
                <h1>
                    Faça seu logon
                </h1>
                <input 
                    type="text" 
                    placeholder="Sua Id"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
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