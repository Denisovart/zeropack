import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from '@/app/router'
import { Providers } from '@/app/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers router={router} />
  </React.StrictMode>,
)