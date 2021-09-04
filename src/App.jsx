import "./assets/scss/bootstrap.scss";
import ScrollToTop from './helpers/ScrollToTop'
import NavBar from "./components/navbar/NavBar";
import Routes from './Routes'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes />
    </div>
  );
}

export default App;
