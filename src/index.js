import React from 'react';
import ReactDOM from 'react-dom/client';
import { IsLoggedIn_Provider } from './Context/LogIn/isLoggedIn-Context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<IsLoggedIn_Provider>
<App />
</IsLoggedIn_Provider>
);
