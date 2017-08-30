import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Err from './Err';
// import registerServiceWorker from './registerServiceWorker';
import spotifyLogin from './utils/spotifyLogin';

// Before the app starts up, we run the spotify login authorization.
// Depending on whether it succeeds or not, we launch the App, or display an error.
spotifyLogin()
    .then(credentials => {

        // This doesn't run until the user has successfully logged in
        ReactDOM.render(<App credentials={credentials} />, document.getElementById('root'));

    })
    .catch(errors => {

        // If the user doesn't log in successfully, this runs instead
        ReactDOM.render(<Err errors={errors}/>, document.getElementById('root'));
    });



