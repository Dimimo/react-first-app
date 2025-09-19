import {Fragment, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Footer} from "./Footer.tsx";
import {Header} from "./Header.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Fragment>
          <Header />
          <Footer/>
      </Fragment>
  </StrictMode>,
)
