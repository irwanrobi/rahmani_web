import "./assets/scss/bootstrap.scss";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Terjemahan from './pages/terjemahan/Terjemahan';
import Legalisasi from './pages/legalisasi/Legalisasi';
import Contact from './pages/contact/Contact'
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <h1>Ini halaman about</h1>
        </Route>

        <Route path="/legalisasi">
          <Legalisasi />
        </Route>

        <Route path="/terjemahan">
          <Terjemahan />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
