import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { store } from './appContext';
import './style.css';

function Auth() {
  const history = useHistory();
  const [failed, setFailed] = useState(false);
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const { isSignedIn, clientId } = state;
  const getContent = () => {
    let f;
    if (failed) {
      f = 'Try again.';
    } else {
      f = '';
    }
    return <h4>{f}</h4>;
  };
  const loading = (
    <Redirect to="/search" />
  );
  const body = (
    <div className="center nice">
      <header>
        <h1 id="title">Giphy Search</h1>
        <GoogleLogin
          clientId={clientId}
          render={renderProps => (
            <button
              type="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="login"
            >
              {/* Login with Google */}
            </button>
          )}
          onSuccess={res => {
            // setFailed(false);
            dispatch({ type: 'signIn', user: res });
            history.push('/search');
          }}
          onFailure={err => {
            setFailed(true);
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
