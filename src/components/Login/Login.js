import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './Login.css';
import { register } from '../../authorization/authorization';

export default function Login() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register(name, email);
      history.push('/');
    } catch (e) {
      setError('Failed to login');
      setLoading(false);
    }
  }

  return <div className="Login">
    <div className="Login__box">
      <h1>Login</h1>
      {loading && <div className="Login__loading">
          Loading
        </div>
      }

      {error && <div className="Login_error">
          Login failed
        </div>
      }
      <div className="Login__form">
        <form onSubmit={onSubmit}>
          <div className="Login__input">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
               />
          </div>

          <div className="Login__input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="Login__submit">
            <button disabled={loading}>Go</button>
          </div>
        </form>
      </div>
    </div>
  </div>;
}
