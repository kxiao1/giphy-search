import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { store } from './appContext';
import './style.css';

function Auth() {
  const history = useHistory();
  const [failed, setFailed] = useState('');
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const { isSignedIn, clientId } = state;
  const getContent = () => {
    if (failed.length > 0) {
      return <h4>Try again.</h4>;
    }
    return null;
  };
  const loading = <Redirect to="./search" />;
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
            setFailed(err.error);
          }}
          cookiePolicy="single_host_origin"
        />
        {getContent()}
      </header>
    </div>
  );
  return isSignedIn ? loading : body;
}
export default Auth;
