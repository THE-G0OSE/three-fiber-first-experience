import {Provider} from 'react-redux'
import { store } from '../store'

import React from 'react'

interface Iprops {
    children: React.ReactNode
}

const StoreProvider: React.FC<Iprops> = ({children}) => {

  return (

    <Provider store={store}>
        {children}
    </Provider>

  )

}

export default StoreProvider