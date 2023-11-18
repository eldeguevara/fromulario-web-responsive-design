import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './material/Route'
import './assets/css/App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className='container'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App