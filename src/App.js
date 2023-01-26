import logo from './logo.svg';
import bienvenido from './bienvenido.gif';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './inicio';
import Contacto from './contacto';
import Portfolio from './portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://classroom.google.com/u/1/w/NTI4Mjk0NzIzMzI3/t/all"
          target="_blank"
          rel="noopener noreferrer"
        >

          
          Bienvenidos al Hito de 2 evaluación de DWEC
        </a>

        <img src={bienvenido} alt="" />


      </header>

      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/portfolio">¿Quiénes somos?</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
 




    </div>
  );
}

export default App;
