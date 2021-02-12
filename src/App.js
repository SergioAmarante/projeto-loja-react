import {lazy, Suspense} from "react";
import './App.css';
import Rotas from './rotas.js'
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
//import Menu from "./componentes/menu.js"
const Menu =lazy (()=>import ("./componentes/menu.js"))

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <header>
          <Suspense fallback={<p>Carregando...</p>}>
            <Menu />
          </Suspense>
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
