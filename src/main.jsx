import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '~react-pages'


export const BaseApp = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
