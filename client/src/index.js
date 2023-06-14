import { Auth0Provider } from '@auth0/auth0-react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-dstps3q4l34f7d23.us.auth0.com'
      clientId='EQF56gG62TNgxBy9obK2mKqtKJknBDgd'
      useRefreshTokens={true}
      authorizationParams={{
        // redirect_uri: 'https://lnctreats.com',
        redirect_uri: 'http://localhost:3000',
        audience: 'https://dev-dstps3q4l34f7d23.us.auth0.com/api/v2/',
        prompt: 'login',
        scope:
          'openid profile email read:users read:current_user update:current_user_metadata offline_access',
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
)
