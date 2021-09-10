import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';

import Header from './Header';
import MainMenu from './MainMenu';
import PersonajeDetalle from './PersonajeDetalle';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/personajes" exact component={ Contenedor } />
      <Route path="/personaje/:id" exact component={ PersonajeDetalle } />
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)

export default App;
