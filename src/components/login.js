import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { store } from './appContext';
import './style.css';

function Auth() {
  const history = useHistory();
  const [failed, setFailed] = useState(
    '(*Demo: No server. Only your name is stored, and only in sessionStorage.)'
  );
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const { clientId } = state;
  const getContent = () => {
    if (failed.length > 0) {
      return <h5>{failed}</h5>;
    }
    return null;
  };
  const storedProfile = sessionStorage.profile
    ? JSON.parse(sessionStorage.profile)
    : null;
  useEffect(() => {
    if (storedProfile) {
      setTimeout(() => history.push('./search'), 3000);
    }
  }, [storedProfile, history]);
  const loading = () => (
    <div className="nice">
      <header className="center">
        <h4>Signing you in, </h4>
        <h5>
          <span className="bold">
            {storedProfile.givenName.slice(
              0,
              storedProfile.givenName.indexOf(',')
            )}{' '}
            {storedProfile.familyName}
          </span>
        </h5>
      </header>
    </div>
  );
  const body = (
    <div className="nice">
      <header className="center">
        <h1 id="title">Giphy Search</h1>
        <GoogleLogin
          clientId={clientId}
          render={renderProps => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="login"
            />
          )}
          onSuccess={res => {
            dispatch({ type: 'signIn', user: res });
            history.push('./search');
          }}
          onFailure={err => {
            console.log(err.error);
            setFailed(`Try again.`);
          }}
          cookiePolicy="single_host_origin"
        />
        {getContent()}
      </header>
    </div>
  );
  if (storedProfile) {
    return loading();
  }
  return body;
}
export default Auth;
