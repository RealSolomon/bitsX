import React from 'react'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.css';
import { Layout } from '../components'
import { StateContext } from '../contex/StateContext'

function MyApp({ Component, pageProps }) {
  return ( 
    <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
    </StateContext>
  )
}

export default MyApp
