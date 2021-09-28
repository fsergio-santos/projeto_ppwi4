import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './AppRouter'

const Routes = () => {
    return (
        <BrowserRouter>
           <AppRouter/>
        </BrowserRouter>
    )
}

export default Routes;