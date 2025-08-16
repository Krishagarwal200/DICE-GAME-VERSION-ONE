import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import InitialHome from './InitialHome.jsx';

createRoot(document.getElementById('root')).render(

  < StrictMode >
    <InitialHome></InitialHome>
  </StrictMode >,
)
