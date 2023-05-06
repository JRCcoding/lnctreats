import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-dstps3q4l34f7d23.us.auth0.com'
      clientId='EQF56gG62TNgxBy9obK2mKqtKJknBDgd'
      useRefreshTokens={true}
      authorizationParams={{
        redirect_uri: 'http://localhost:3000',
        audience: 'https://dev-dstps3q4l34f7d23.us.auth0.com/api/v2/',
        prompt: 'login',
        scope:
          'openid profile email read:current_user update:current_user_metadata',
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
)
